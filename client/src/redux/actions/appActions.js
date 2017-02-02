export function handleEventClick(event) {
  return {
    type: 'SET_CURRENT_SESSION',
    payload: event
  }
};

export function addToBookmarks(event) {
  console.log('add to bookmark');
  return {
    type: 'ADD_TO_BOOKMARKS',
    payload: event
  }
};

export function showHome() {
  console.log('show home');
  return {
    type: 'SHOW_HOME'
  }
}

export function showBookmarks() {
  console.log('bookmark');
  return {
    type: 'SHOW_BOOKMARKS'
  }
}

export function getEvents(query) {
  return function(dispatch) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        term: query,
        location: 'San Francisco'
      })
    };

    fetch('/getData', options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        dispatch({type: "FETCH_EVENTS_FULFILLED", payload: data});
      });
  }
}