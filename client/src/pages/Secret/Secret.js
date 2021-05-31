import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class Secret extends Component {
  static contextType = AuthContext;
  state = {
    isLoading: true,
    error: "",
    data:[]
  }
  
  componentDidMount() {
    API.Users.getMe(this.context.authToken)
      .then(response => response.data)
      .then(data => this.setState({ data }))
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
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div>
                  <p>Quotes Added..</p>
                  <ul>
                  {this.state.data.quote.map((line, index) => {
                    return(
                        <li style={{listStyle:'none'}} key={index} >{line}</li>
                    )
                  })}
                  </ul>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
