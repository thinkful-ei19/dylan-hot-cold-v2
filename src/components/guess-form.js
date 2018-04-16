import React from 'react';
import { connect } from 'react-redux';

import { submitGuess, generateFeedback } from '../actions';

import './guess-form.css';

export function GuessForm(props) {

  let submitButton;
  if (!props.win) {
    submitButton = <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />;
  } else {
    submitButton = <input type="button" id="guessButton" className="button" value="" />;
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const guess = e.target.userGuess.value;
      e.target.userGuess.value = '';
      if (props.guesses.includes(guess)) {
        alert('You already guessed that number!');
      } else {
        props.dispatch(submitGuess(guess, props.count));
      }
      props.dispatch(generateFeedback(guess));
    }}>
      <input type="number" name="userGuess" id="userGuess"
        className="text" maxLength="3" min="0" max="100" autoComplete="off"
        placeholder="Enter your Guess" required />
      {submitButton}
    </form>
  );
}

export const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    count: state.count,
    win: state.win
  };
};

export default connect(mapStateToProps)(GuessForm);

