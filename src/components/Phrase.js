import React from 'react';

const phrases = [
  "I am the world",
  "I am the best",
  "Kanye is family"
]

const randomPhrase = () => {
    return phrases[Math.floor(Math.random() * phrases.length)]
  }


const Phrase = (props) => {
  const { phrase, guessed } = props;
  const blankAnswers = phrase.split("").map(letter => (guessed.includes(letter) ? letter : " _ "))
  return (
  <React.Fragment>
    <p>{blankAnswers}</p>
  </React.Fragment>
  );
};

export { Phrase, randomPhrase };


// return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));