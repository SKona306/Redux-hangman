import React from 'react';

const Figure = (props) => {
  return (
  <React.Fragment>
    <div className='figure' style={{display: "flex", justifyContent: "space-evenly"}}>
      <div className='images'>
        <img src={props.images[props.mistakes]} alt='images of hangman'/>
      </div>
      <div className='wrong-guess-tracker' style={{padding: "2rem", paddingLeft: "5rem"}}>
        <h4>Wrong Guesses:</h4>
        <p>{props.mistakes} of 6</p>
      </div>
    </div>
    <hr />
    
    
  </React.Fragment>);
};

export default Figure;
