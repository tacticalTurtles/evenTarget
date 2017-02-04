export default function reducer(state={
  comment: ''
}, action) {

  switch (action.type) {
    case "HANDLE_INPUT_CHANGE_CURRENT_EVENT": {
      return { ...state,
        comment: action.payload
      }
    }
  }
  return state;
}