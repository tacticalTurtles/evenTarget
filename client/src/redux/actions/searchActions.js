export function handleInputChange(event) {
  console.log('event', event);
  return {
    type: "HANDLE_INPUT_CHANGE_SEARCH",
    payload: event
  }
}