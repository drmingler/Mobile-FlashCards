import { AsyncStorage } from "react-native";
const DECK_STORAGE_KEY = "Deck:cards";

//Save decks title
export const _saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: { title: title, questions: [] }
    })
  );
};

// Add a new card to the existing decks
export const _addCardToDeck = async ({ title, card }) => {
  try {
    const deck = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    const data = JSON.parse(deck);
    data[title].questions.push(card);
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

// Get all the decks in the database
export const _getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    return JSON.parse(decks);
  } catch (e) {
    console.log(e);
  }
};

//Get a specific decks
export const _getDeck = async title => {
  try {
    const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    const data = JSON.parse(decks);
    return data[title];
  } catch (e) {
    console.log(e);
  }
};

// Remove decks from the list of decks
export const _removeDeck = async title => {
  const deck = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  const data = JSON.parse(deck);
  data[title] = undefined;
  delete data[title];
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
};
