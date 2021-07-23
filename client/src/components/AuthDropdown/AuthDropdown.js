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
          <div className="card-body userBody">
            <p className="mt-3 m-0 text-muted font-weight-bold">{user.email}</p>
            <a href="/inspiration">
              <p className="inspire-link text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-quote mr-2" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                  <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                Inspire
              </p>
            </a>
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
