import { getDecks } from "./Deck";
import { addScore } from "./Score";
import { _getDecks } from "../utils/api";

export function handleInitialData() {
  return dispatch => {
      _getDecks().then((decks)=>{
          dispatch(getDecks(decks));
          dispatch(addScore(0))
      })
  };
}
