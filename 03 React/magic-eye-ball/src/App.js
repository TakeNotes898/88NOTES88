import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerArray: ['yes ', 'no ', 'maybe ', 'in your dreams' ],
      quastion: ''
    }
  }



  getAnswer = () => {
    const { answerArray } = this.state;
    return this.state.answerArray
    // = Math.ceil(Math.random() * 4)
  };

  handleChange = (e) => {
    this.setState({ quastion: e.target.value })
  }

  handleSubmit = () => {
    const { quastion } = this.setState;
    const answer = this.getAnswer();
    this.setState({ answer: answer });
  }

render(){
  return (
    <div class="fullBody">
      <h1>The Magic Eye Ball</h1>
      <p><input
        id="inputBox"
        type='text'
        onChange={ this.handleChange }
      /></p>

      <br />

      <button onClick={ this.handleSubmit }>
        Ask the EYE ball a quastion
      </button>
      <p> { this.state.answer } </p>

      <div class="sphere blue"></div>
    </div>
    )
  }
}
export default App;
