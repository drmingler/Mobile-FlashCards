import {addDeckTitle, getDecks, remove} from "./Deck";
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


// Async action to remove  a deck
export function handleRemoveDeck(title) {
    return dispatch => {
        dispatch(remove(title));
        dispatch(resetScore());
        // If it wasn't successful add the deck back
        _removeDeck(title).catch(()=>dispatch(addDeckTitle(title)));
    };
}