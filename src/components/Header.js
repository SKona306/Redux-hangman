import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <div className='header' style={{display:"flex", flexDirection:'column' ,justifyContent: "center", alignItems: "center"}}>
        <h1>Hangman</h1>
        <p>Find the hidden phrase - Choose a letter</p>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Header;
