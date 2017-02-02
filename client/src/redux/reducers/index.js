import {combineReducers} from "redux";

import currentEvents from "./currentEventReducer.js";
import search from "./searchReducer.js";
import app from './appReducer.js';

export default combineReducers({
  currentEvents,
  search,
  app
})