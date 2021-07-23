import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import './Secret.css'
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import Banner from '../../components/Banner/Banner';
import InspirationImg from '../../images/Inspiration.jpg'
class Secret extends Component {
  static contextType = AuthContext;
  state = {
    isLoading: true,
    error: "",
  }
  
  componentDidMount() {
    API.Users.getMe(this.context.authToken)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    return (
      <div className='Secret'>
        <Banner title='Inspiration' src={InspirationImg}/>
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div className='card NQCard'>
                  <h2>No Quotes Added....</h2>
                  <p>You can add quotes <a href="/quotes">here</a>!</p>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
