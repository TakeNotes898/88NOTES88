import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import cover from './img/cover.jpg'
import Dice from './components/Dice.js'
import Left from './components/Left.js'
import Right from './components/Right.js'




class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numberRolled: ""
    }
  }

  randomNumberRolled = (num) => {
    this.setState({ numberRolled: num })
  }


  rollTheDice = () => {
    let theDice = [1, 2, 3, 4, 5, 6]
    let random = Math.floor(Math.random() * theDice.length)
    this.props.randomNumberRolled(theDice[random])
  }


  render(){
    return(
      <Card >
        <Card.Img variant="top" src= { cover }/>
        <Card.Body>
              <Card.Title ><h1><Badge variant="danger">The Dice Roller</Badge></h1></Card.Title>
              <CardColumns>
                          <Left  />
                          <Dice
                            randomNumberRolled={this.randomNumberRolled}
                            numberRolled={this.state.numberRolled}/>
                          <Right />
              </CardColumns>
        </Card.Body>
      </Card>
    )
  }
}

export default App;
