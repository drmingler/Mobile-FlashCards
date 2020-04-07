export const ADD_SCORE = "ADD_SCORE";
export const RESET_SCORE = "RESET_SCORE";

export function resetScore(score = 0) {
  return {
    type: RESET_SCORE,
    score
  };
}
export function addScore(score) {
  return {
    type: ADD_SCORE,
    score
  };
}
