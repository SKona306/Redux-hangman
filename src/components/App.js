import './App.css';
import React from 'react';
import Header from '../components/Header';
import GameControl from '../components/GameControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <GameControl />
    </React.Fragment>
  );
}

export default App;
