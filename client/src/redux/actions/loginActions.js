import axios from 'axios';

export function userLoginRequest(userData) {
  var obj = {
    username: userData.username,
    password: userData.password
  }

  fetch('/api/users', obj)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });

  // return dispatch => {
  //   return axios.get('/api/users', obj);
  // }
}


// export function userLoginRequest(query) {
//   return function(dispatch) {
//     var options = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         term: query,
//         location: 'San Francisco'
//       })
//     };
//
//     fetch('/getData', options)
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((data) => {
//         dispatch({type: "FETCH_EVENTS_FULFILLED", payload: data});
//       });
//   }
// }
