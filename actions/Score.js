export const ADD_SCORE = "ADD_SCORE";

export function addScore(score) {
  return {
      type: ADD_SCORE,
      score
  };
}
