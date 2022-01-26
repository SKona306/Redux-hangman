import React from 'react';

const GuessableLetters = (props) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const { onClickingLetter, guessed } = props;

  return (
  <React.Fragment>
    <hr />
    {letters.split('').map(letter => (
      <button
        key={letter}
        value={letter}
        onClick={() => onClickingLetter(letter)}
        disabled={guessed.includes(letter)}
        >{letter}</button>
    ))}
  </React.Fragment>
  );
};

export default GuessableLetters;
