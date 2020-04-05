export const GET_DECKS = "GET_DECKS";
export const ADD_CARDS_TO_DECK = "ADD_CARDS_TO_DECK";
export const ADD_DECK_TITLE = "ADD_DECK_TITLE";
export const REMOVE_DECK = "REMOVE_DECK";
import {
  _saveDeckTitle,
  _getDecks,
  _addCardToDeck,
  _removeDeck
} from "../utils/api";

// Action to set the deck title
export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

// Action to add card to deck i.e questions and answers
export function addCardToADeck({ title, card }) {
  return {
    type: ADD_CARDS_TO_DECK,
    title,
    card
  };
}

export function addDeckTitle(title) {
  return {
    type: ADD_DECK_TITLE,
    title
  };
}

// Action to remove card
export function remove(title) {
  return {
    type: REMOVE_DECK,
    title
  };
}

// Async action to add card to deck
export function handleAddingCardToDeck(data) {
  return dispatch => {
    _addCardToDeck(data).then(() => {
      dispatch(addCardToADeck(data));
    });
  };
}

// Async action to get all available decks
// export function handleGetDeck() {
//   return dispatch => {
//     _getDecks().then(decks => {
//       dispatch(getDecks(decks));
//     });
//   };
// }

// Async action to add title of a new decks
export function handleAddDeckTitle(title) {
  return dispatch => {
    _saveDeckTitle(title).then(() => {
      dispatch(addDeckTitle(title));
    });
  };
}

// Async action to remove card from deck
export function handleRemoveDeck(title) {
    return dispatch =>{
        dispatch(remove(title));
        _removeDeck(title).catch(
            dispatch(addDeckTitle(title))
        )
    }

}
