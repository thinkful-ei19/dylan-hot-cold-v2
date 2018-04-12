import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
  return (
    <p className="count__text">
      Guess #<span id="count">{props.count}</span>!
        </p>
  );
}
