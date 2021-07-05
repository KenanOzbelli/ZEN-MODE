import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password) => {
    API.Users.create(email, password)
      .then((response)=> {
        this.setState({redirectToReferrer: true})
      })
      .catch(err => {
        const message = err.response.data.message
        this.setState({error: message })
      })
  }

  passworderrHandle = (value) => {
    this.setState({error: value})
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/login" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='row'>
          <div className='col'>
            <h1>Register Account</h1>
          </div>
        </div>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <RegistrationForm onSubmit={this.handleSubmit} passwordHandle={this.passworderrHandle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
