import { SUBMIT_GUESS, NEW_GAME, GENERATE_FEEDBACK, TOGGLE_INFO_MODAL } from '../actions';

const initialState = {
  guesses: [],
  count: 0,
  feedback: 'Make your guess!',
  number: Math.floor(Math.random() * 101),
  win: false,
  infoModal: false
};

export const gameReducer = (state = initialState, action) => {

  if (action.type === SUBMIT_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      count: action.previousCount + 1
    });
  }
  else if (action.type === NEW_GAME) {
    return Object.assign({}, state, initialState);
  }
  else if (action.type === GENERATE_FEEDBACK) {

    let difference = Math.abs(state.number - action.lastGuess);
    let feedback;
    let win = false;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it! Click new game to play again.';
      win = true;
    }

    return Object.assign({}, state, { feedback, win });
  }
  else if (action.type === TOGGLE_INFO_MODAL) {
    return Object.assign({}, state, { infoModal: !state.infoModal });
  }

  return state;
};