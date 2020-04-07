import {
  GET_DECKS,
  ADD_CARDS_TO_DECK,
  ADD_DECK_TITLE,
  REMOVE_DECK
} from "../actions/Deck";

// Reducer updating the state of the deck in the store
export default function deck(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARDS_TO_DECK:
      const questions = [...state[action.title].questions];
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: questions.concat(action.card)
        }
      };

    case ADD_DECK_TITLE:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          title: action.title,
          questions: []
        }
      };

    case REMOVE_DECK:
      const removeDeck = (state, title) => {
        return Object.keys(state)
          .filter(key => key !== title)
          .reduce((newObject, currentValue) => {
            newObject[currentValue] = state[currentValue];
            return newObject;
          }, {});
      };
      return removeDeck(state, action.title);

    default:
      return state;
  }
}
