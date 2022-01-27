import React from 'react';

const GuessableLetters = (props) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const { onClickingLetter, gameState} = props;
  const editedPhrase = gameState.answer.replaceAll(" ", "");

  return (
  <React.Fragment>
    <hr />
    <div className='letters' style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
      {letters.split('').map(letter => (
        <button
          key={letter}
          value={letter}
          onClick={() => onClickingLetter(letter)}
          disabled={gameState.guessed.includes(letter) || gameState.correct === editedPhrase.length || gameState.mistake === 6}
          >{letter}</button>
      ))}
    </div>
    
  </React.Fragment>
  );
};

export default GuessableLetters;
