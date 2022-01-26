import React from 'react';
import GuessableLetters from './GuessableLetters';
import { Phrase, randomPhrase } from '../components/Phrase';
import Figure from '../components/Figure';
import step0 from '../images/0.jpg';
import step1 from '../images/1.jpg';
import step2 from '../images/2.jpg';
import step3 from '../images/3.jpg';
import step4 from '../images/4.jpg';
import step5 from '../images/5.jpg';
import step6 from '../images/6.jpg';

class GameControl extends React.Component {

  static defaultProps = {
    images: [step0, step1, step2, step3, step4, step5, step6]
  }
  
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: [],
      answer: ''
    }
  }

  handleGetPhrase = () => {
    const phrase = randomPhrase().toLowerCase()
    this.setState(st => ({
      answer: st.answer = phrase
    }));
  }

  handleGuess = e => {
    this.setState (st => ({
      guessed: st.guessed.concat(e),
      mistake: st.mistake + (this.state.answer.includes(e) ? 0 : 1)
    }));
  }

  handleReset = () => {
    this.setState({
      mistake: 0,
      guessed: [],
      answer: ''
    })
  }


  render() {
    const startButton = (this.state.answer !== '') ? "" : <button onClick={this.handleGetPhrase}>Generate</button>
    return(
      <React.Fragment>
        <Figure 
          mistakes = {this.state.mistake}
          images = {this.props.images}/>
        {startButton}
        <Phrase
          phrase = {this.state.answer}
          guessed = {this.state.guessed}/>
        <GuessableLetters 
          onClickingLetter = {this.handleGuess} 
          guessed = {this.state.guessed}/>
      </React.Fragment>
    )
  }
  
}

export default GameControl;

