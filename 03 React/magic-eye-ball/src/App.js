import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Background from './vegas.jpeg';




class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerArray: [
          'YES!!!!!!! ',
          'NO NO NO and NO ',
          "WELL Maybe... ",
          "if you'll be good",
          'In YOUR DREAMS',
          'How about NO',
          'I REALLY think NOT',
          'Think you CAN, but NO',
          'Come again later',
          "How dare you!?!?!",
          "Lets not talk about it",
          "Will talk tomorrow"
        ],
      quastion: ''
    }
  }



  getAnswer = () => {
    const { answerArray } = this.state;
    return this.state.answerArray[ Math.ceil(Math.random() * this.state.answerArray.length) ]
  };

  handleChange = (e) => {
    this.setState({ quastion: e.target.value })
  }

  handleSubmit = () => {

    const { quastion } = this.setState;



    if (this.state.quastion === null || this.state.quastion === '')  {
      return alert ("come on now! be realistic!!!")
    } else {
      const answer = this.getAnswer();
      this.setState({ answer: answer });
    }

  }

render(){
  return (
    <div class="fullBody">
      <h1 class="header">The Magic Evil Ball</h1>
      <p><input
        id="inputBox"
        type='text'
        onChange={ this.handleChange }
      /></p>

      <p><button onClick={ this.handleSubmit } >
        Ask the EYE ball a quastion
      </button></p>





      <br />
          <p class="sphere">{ this.state.answer }</p>














    </div>
    )
  }
}
export default App;
