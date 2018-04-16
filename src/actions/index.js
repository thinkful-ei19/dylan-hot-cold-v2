export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (guess, previousCount) => ({
  type: SUBMIT_GUESS,
  guess,
  previousCount
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});

export const GENERATE_FEEDBACK = 'GENERATE_FEEDBACK';
export const generateFeedback = (lastGuess) => ({
  type: GENERATE_FEEDBACK,
  lastGuess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL
});