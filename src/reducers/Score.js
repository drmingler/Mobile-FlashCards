import { ADD_SCORE } from "../actions/Score";

export default function score(state = 0, action) {
  switch (action.type) {
    case ADD_SCORE:
      return action.score;
    default:
      return state;
  }
}
