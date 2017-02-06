import {combineReducers} from "redux";

import currentEvents from "./currentEventReducer.js";
import search from "./searchReducer.js";
import app from './appReducer.js';
import flashMessages from './flashMessagesReducer.js';
import auth from './authReducer.js';

export default combineReducers({
  currentEvents,
  search,
  app,
  flashMessages,
  auth
})