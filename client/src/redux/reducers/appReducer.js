export default function reducer(state={
  bookmarks: [],
  tempBookmarks: [],
  events: [],
  tempEvents: [],
  currentEvent: null
}, action) {

  switch (action.type) {
    
    case "SET_CURRENT_SESSION": {
      console.log('in session')
      return { ...state, 
        tempEvents: state.events.splice(0),
        events: [],
        currentEvent: action.payload
      }
    }

    case "ADD_TO_BOOKMARKS": {
      var tempBookmark = state.tempBookmarks.splice(0);
      tempBookmarks.push(action.payload);
      return {...state, 
        tempBookmarks: tempBookmark
      }
    }

    case "SHOW_HOME": {
      return {...state,
        tempBookmarks: state.bookmarks.splice(0),
        bookmarks: [],
        events: state.tempEvents.splice(0),
        currentEvent: null
      }
    }

    case 'SHOW_BOOKMARKS': {
      return { ...state,
        bookmarks: state.tempBookmarks.splice(0),
        tempEvents: state.events.splice(0),
        events: [],
        currentEvent: null
      }
    }

    case 'FETCH_EVENTS_FULFILLED': {
      return {...state,
        events: action.payload
      }
    }
  }

  return state;
}