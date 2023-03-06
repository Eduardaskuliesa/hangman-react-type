import React from 'react';
import classes from './hangman-drawing.module.scss';

const HangmanDrawing = () => (
  <div className={classes.wrapper}>
    <div className={classes.litle} />
    <div className={classes.top} />
    <div className={classes.mid} />
    <div className={classes.bottom} />
  </div>
);

export default HangmanDrawing;
