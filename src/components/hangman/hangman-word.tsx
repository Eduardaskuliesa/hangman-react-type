/* eslint-disable react/no-array-index-key */
import React from 'react';
import classes from './hangman-word.module.scss';

const word = 'test';
const queesedLetters = ['t', 'b'];

const HangmanWord = () => (
  <div className={classes.wrapper}>
    {word.split('').map((letter, index) => (
      <span className={classes.underline} key={index}>
        <span style={{
          visibility: queesedLetters.includes(letter)
            ? 'visible'
            : 'hidden',
        }}
        >
          {letter}
        </span>
      </span>

    ))}

  </div>
);

export default HangmanWord;
