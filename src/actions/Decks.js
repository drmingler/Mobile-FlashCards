export const GET_DECKS = "GET_DECKS";
export const ADD_CARDS_TO_DECK = "ADD_CARDS_TO_DECK";
export const ADD_DECK_TITLE = "ADD_DECK_TITLE";
export const REMOVE_DECK = "REMOVE_DECK";
import { _saveDeckTitle, _getDecks, _addCardToDeck } from "../utils/api";

// Action to set the decks title
export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

// Action to add card to decks i.e questions and answers
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

// Async action to add card to decks requires  title, card as an object
export function handleAddingCardToDeck(data) {
  return dispatch => {
    // Get the decks title from the card
    // const { title } = data;
    _addCardToDeck(data)
      .then(() => {
        dispatch(addCardToADeck(data));
      })
      // .catch(dispatch(remove(title)));
  };
}

// Async action to add title of a new decks
export function handleAddDeckTitle(title) {
  return dispatch => {
    _saveDeckTitle(title).then(() => {
      dispatch(addDeckTitle(title));
    });
  };
}
