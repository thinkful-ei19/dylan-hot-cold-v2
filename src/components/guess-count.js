import React from 'react';
import { connect } from 'react-redux';

import './guess-count.css';
// import { mapStateToProps } from './guess-list';

export function GuessCount(props) {
  return (
    <p className="count__text">
      Guess #<span id="count">{props.count}</span>!
        </p>
  );
}

export const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(GuessCount);
