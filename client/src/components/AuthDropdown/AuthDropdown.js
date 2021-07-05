import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import './AuthDropdown.css'
import AuthContext from '../../contexts/AuthContext';

class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: 'none'
  }

  componentDidMount(){
    document.body.addEventListener('click', this.toggleClose)
  }
  componentWillUnmount(){
    document.body.removeEventListener('click', this.toggleClose)
  }

  toggleOpen = () => {
    this.setState({
      isOpen: 'block'
    });
  }
  toggleClose = () => {
    if(this.state.isOpen === 'block'){this.setState({isOpen: 'none'})}
  }

  handleLogout = () => {
    this.context.onLogout();
    this.props.onClick();
  }

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;


    return (
      <li className="nav-item" style={{position:'relative'}}>
        <button className="btn text-white" onClick={this.toggleOpen} aria-haspopup="true" aria-expanded="false">
          <Gravatar className="rounded-circle" email={user.email} size={30} /> {user.email}
        </button>
        <div className="card userCard" aria-hidden="true" style={{display:isOpen}}>
          <Gravatar className="rounded-circle" email={user.email} size={50} style={{margin:'0 auto', marginBottom:'1rem'}} />
          <p>{user.email}</p>
          <button className="btn btn-secondary" onClick={this.handleLogout}>
            Sign Out
          </button>
        </div>
      </li>
    );
  }
}

export default AuthDropdown;
