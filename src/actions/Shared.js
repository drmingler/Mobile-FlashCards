import {addDeckTitle, getDecks, remove} from "./Decks";
import { addScore, resetScore } from "./Score";
import {_getDecks, _removeDeck} from "../utils/api";

export function handleInitialData() {
  return dispatch => {
      _getDecks().then((decks)=>{
          dispatch(getDecks(decks));
          dispatch(addScore(0))
      })
  };
}


// Async action to remove  a decks
export function handleRemoveDeck(title) {
    return dispatch => {
        dispatch(remove(title));
        dispatch(resetScore());
        // If it wasn't successful add the decks back
        _removeDeck(title).catch(()=>dispatch(addDeckTitle(title)));
    };
}