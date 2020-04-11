// formatCard returns all the data needed by the quiz component in an easy to use format
export function formatCard(decks, title) {
  const card = decks[title].questions;
  const totalCardsInDeck = card.length;
  return {
    card,
    totalCardsInDeck
  };
}

export function calcPercentageScore(totalCardsInDeck, score) {
  return ((score / totalCardsInDeck) * 100).toFixed();
}
