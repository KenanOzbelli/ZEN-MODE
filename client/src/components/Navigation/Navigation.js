import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'
      }`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'
      }`;

    return (
    <div className='Navigation' style={{boxShadow:'0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)'}}>
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <Link className='navbar-brand text-light' to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" background="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#ddd" >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g><circle cx="12" cy="6" r="2" /><path d="M21,16v-2c-2.24,0-4.16-0.96-5.6-2.68l-1.34-1.6C13.68,9.26,13.12,9,12.53,9h-1.05c-0.59,0-1.15,0.26-1.53,0.72l-1.34,1.6 C7.16,13.04,5.24,14,3,14v2c2.77,0,5.19-1.17,7-3.25V15l-3.88,1.55C5.45,16.82,5,17.48,5,18.21C5,19.2,5.8,20,6.79,20H9v-0.5 c0-1.38,1.12-2.5,2.5-2.5h3c0.28,0,0.5,0.22,0.5,0.5S14.78,18,14.5,18h-3c-0.83,0-1.5,0.67-1.5,1.5V20h7.21 C18.2,20,19,19.2,19,18.21c0-0.73-0.45-1.39-1.12-1.66L14,15v-2.25C15.81,14.83,18.23,16,21,16z" /></g>
            </g>
          </svg>
          
        </Link>
        <button className={togglerClass}
          onClick={
            this.toggleCollapse
          }
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={targetClass}
          id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/'
                onClick={
                  this.toggleCollapse
                }>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/quotes'
                onClick={
                  this.toggleCollapse
                }>Quotes</Link>
            </li>
            {
              user && <li className='nav-item'>
                <Link className='nav-link text-light' to='/inspiration'
                  onClick={
                    this.toggleCollapse
                  }>Inspiration</Link>
              </li>
            } </ul>
          <ul className='navbar-nav'> {
            user ? <AuthDropdown onClick={
              this.toggleCollapse
            } /> : <>
              <li className='nav-item'>
                <Link className='nav-link text-light' to='/login'
                  onClick={
                    this.toggleCollapse
                  }>Login</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light' to='/register'
                  onClick={
                    this.toggleCollapse
                  }>Register</Link>
              </li>
            </>
          } </ul>
        </div>
      </nav>
    </div>);
  }
}

export default Navigation;
