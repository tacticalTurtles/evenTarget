export default function reducer(state={
  bookmarks: [],
  tempBookmarks: [],
  events: [],
  tempEvents: [],
  currentEvent: null
}, action) {

  switch (action.type) {

    case "SET_CURRENT_SESSION": {
      if (state.bookmarks.length === 0) {
        state.bookmarks = state.tempBookmarks;
      }
      if (state.events.length === 0) {
        state.events = state.tempEvents;
      }
      return { ...state, 
        tempBookmarks: state.bookmarks.splice(0),
        bookmarks: [],
        tempEvents: state.events.splice(0),
        events: [],
        currentEvent: action.payload
      }
    }

    case "ADD_TO_BOOKMARKS": {
      state.tempBookmarks.push(action.payload);
      return {...state,
        currentEvent: null
      }
    }

    case "SHOW_HOME": {
      if (state.tempEvents.length === 0) {
        state.tempEvents = state.events;
      }
      if (state.bookmarks.length === 0) {
        state.bookmarks = state.tempBookmarks;
      }
      return {...state,
        tempBookmarks: state.bookmarks.splice(0),
        bookmarks: [],
        events: state.tempEvents.splice(0) || state.events,
        currentEvent: null
      }
    }

    case 'SHOW_BOOKMARKS': {
      if (state.events.length === 0) {
        state.events = state.tempEvents;
      }
      return { ...state,
        bookmarks: state.tempBookmarks.splice(0),
        tempEvents: state.events.splice(0),
        events: [],
        currentEvent: null
      }
    }

    case 'FETCH_EVENTS_FULFILLED': {
      return {...state,
        events: action.payload,
        currentEvent: null
      }
    }
  }

  return state;
}