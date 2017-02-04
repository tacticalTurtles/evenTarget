import axios from 'axios';

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.get('/api/users', {
      params: {
        username: userData.username,
        password: userData.password
      }
    });
  }
}
