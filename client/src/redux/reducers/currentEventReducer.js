export default function reducer(state={
  comments: [],
  comfort: 0,
  comfortNumber: 0
}, action) {

  switch (action.type) {
    case "HANDLE_INPUT_CHANGE_CURRENT_EVENT": {
      return { ...state,
        comment: action.payload
      }
    }

    case "GET_COMMENTS": {
      return {...state,
        comments: action.payload
      }
    }

    case "GET_COMFORT_LEVEL": {
      return{ ...state,
        comfort: action.payload.comfort,
        comfortNumber: action.payload.comfortNumber
      }
    }

    // case "SET_COMFORT_LEVEL": {
    //   return {...state}
    // }
  }
  return state;
}
