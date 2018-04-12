import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

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
      props.submitGuess(guess);
      props.generateFeedback(guess);
    }}>
      <input type="number" name="userGuess" id="userGuess"
        className="text" maxLength="3" min="0" max="100" autoComplete="off"
        placeholder="Enter your Guess" required />
      {submitButton}
    </form>
  );
}

