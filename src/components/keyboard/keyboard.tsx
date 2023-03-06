import React from 'react';
import KEYS from './keys';
import classes from './keyboard.module.scss';

const KeyBoard = () => (
  <div className={classes.wrapper}>
    {KEYS.map((key) => (
      <button className={classes.btn} type="button" key={key}>{key}</button>
    ))}
  </div>
);

export default KeyBoard;
