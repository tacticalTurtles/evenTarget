export default function reducer(state={
  searchValue: ''
}, action) {

  switch (action.type) {
    case "HANDLE_INPUT_CHANGE_SEARCH": {
      return { ...state,
        searchValue: action.payload
      }
    }
  }
  return state;
}