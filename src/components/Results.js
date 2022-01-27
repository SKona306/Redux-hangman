import React from 'react';

const Results = (props) => {
  const { answer } = props;
  const edited = answer.replaceAll(" ", "");
  console.log(props.correct);
  function resultsToggle() {
    if(props.correct === 0) {
      return ""
    } else if (props.correct === edited.length) {
      return <h1>You Win!</h1>
    } else if (props.mistakes === 6 ) {
      return <h1>You Lose!</h1>
    } else {
      return ""
    }
  }

  return (
  <React.Fragment>
    {resultsToggle()}
  </React.Fragment>);
};

export default Results;
