import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import './AuthDropdown.css'
import AuthContext from '../../contexts/AuthContext';

class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: 'none'
  }

  toggleOpen = () => {
    this.setState({
      isOpen: 'block'
    });
  }
  toggleClose = () => {
    if (this.state.isOpen === 'block') { this.setState({ isOpen: 'none' }) }
  }

  handleLogout = () => {
    this.context.onLogout();
    this.props.onClick();
  }

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;


    return (
      <li className="nav-item">
        <button className="btn text-white" onClick={this.toggleOpen} aria-haspopup="true" aria-expanded="false">
          <Gravatar className="rounded-circle" email={user.email} size={30} /> {user.email}
        </button>
        <div className="card userCard" aria-hidden="true" style={{ display: isOpen }}>
          <div className="icon-x" onClick={this.toggleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="card-header">
            <Gravatar className="rounded-circle avatar" email={user.email} size={50} />
          </div>
          <div className="card-body">
            <p className="mt-3">{user.email}</p>
            <button className="btn btn-secondary" onClick={this.handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </li>
    );
  }
}


export default AuthDropdown;
