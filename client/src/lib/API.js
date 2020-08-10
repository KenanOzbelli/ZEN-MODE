import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },
    create: function (email, password, quote) {
      return axios.post('/api/users', { email, password, quote });
    },
    update:function (quote){
      return axios.put('/api/users/update', {quote});
    },
    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}
