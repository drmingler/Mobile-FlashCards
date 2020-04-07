import { combineReducers } from "redux";
import Deck from "../reducers/Deck";
import Score from "../reducers/Score";

export default combineReducers({
  Deck,
  Score
});
