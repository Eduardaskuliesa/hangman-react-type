import HangmanDrawing from 'components/hangman/hangman-drawing';
import HangmanWord from 'components/hangman/hangman-word';
import KeyBoard from 'components/keyboard/keyboard';
import KeyBoardDrawing from 'components/keyboard/keyboard-drawing';
import Layout from 'layouts/hangman-layout/layout';
import React from 'react';
import words from './word-list/word-list.json';

const App = () => {
  const [wordToGuees, setWordToGuess] = React.useState(() => words
    [Math.floor(Math.random() * words.length)]);

  const [queesedLetters, setQuessesdLetters] = React.useState<string[]>([]);

  return (
    <Layout>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{ alignSelf: 'stretch' }}>
        <KeyBoard />
      </div>
    </Layout>

  );
};

export default App;
