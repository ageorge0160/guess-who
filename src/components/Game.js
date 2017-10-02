import React from 'react';
import AnswerBox from './AnswerBox';
import GuessForm from './GuessForm';
import CharacterGrid from './CharacterGrid';

const Game = () => {
  return (
    <div>
      <GuessForm />
      <AnswerBox />
      <CharacterGrid />
    </div>
  );
};

export default Game;
