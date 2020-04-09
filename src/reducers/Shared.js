import { combineReducers } from "redux";
import Decks from "./Decks";
import Score from "../reducers/Score";

export default combineReducers({
  Decks,
  Score
});
