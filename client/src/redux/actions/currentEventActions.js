export function handleInputChange(event) {
  return {
    type: "HANDLE_INPUT_CHANGE_CURRENT_EVENT",
    payload: event
  }
}

export function getComments(id) {
  return function(dispatch) {
    var options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      getEventid: id
    })
  };

  fetch('/getcomments', options)
    .then((resp) => {
      return resp.json();
    })
    .then((comments) => {
      var newComments = [];
      for (var i = 0; i < comments.length; i++) {
        newComments.push(comments[i].comment);
      }
      dispatch( {type: 'GET_COMMENTS', payload: newComments});
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function getComfortLevel(id) {
  return function(dispatch) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    };
    fetch('/getComfort', options)
      .then((resp) => {
        return resp.json()
      }).then((resp) => {
        dispatch({type: 'GET_COMFORT_LEVEL', payload:
        {comfort: resp.comfort,
        comfortNumber: resp.comfortNumber}});
      })
  }
}
