import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      count: 0,
      feedback: 'Make your guess!',
      number: Math.floor(Math.random() * 101),
      win: false,
      infoModal: false
    };
  }

  submitGuess(guess, previousCount) {
    if (this.state.guesses.includes(parseInt(guess, 10))) {
      alert('You already guessed that number');
    } else {
      this.setState({
        guesses: [...this.state.guesses, parseInt(guess, 10)],
        count: previousCount += 1
      });
    }
  }

  newGame() {
    const newState = {
      number: Math.floor(Math.random() * 101),
      feedback: 'Make your guess!',
      count: 0,
      win: false,
      guesses: [],
      infoModal: false
    };
    this.setState(newState);
  }

  generateFeedback(lastGuess) {
    let difference = Math.abs(this.state.number - lastGuess);
    let feedback;
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
      this.setState({ win: true });
    }
    this.setState({ feedback });
  }

  toggleInfoModal() {
    this.setState({ infoModal: !this.state.infoModal });
  }

  showInfoModal() {
    this.setState({ infoModal: true });
  }

  hideInfoModal() {
    this.setState({ infoModal: false });
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <Header newGame={() => this.newGame()} infoModal={this.state.infoModal} toggleInfoModal={(() => this.toggleInfoModal())} />
        <div className="game-wrap">
          <GuessSection feedback={this.state.feedback} submitGuess={(guess) => this.submitGuess(guess, this.state.count)} generateFeedback={(lastGuess) => this.generateFeedback(lastGuess)} win={this.state.win} />
          <GuessCount count={this.state.count} />
          <GuessList guesses={this.state.guesses} />
        </div>
      </div>
    );
  }
}

export default Game;
