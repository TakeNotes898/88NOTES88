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

  render(){
    return(
      <Card >
        <Card.Img variant="top" src= { cover }/>
        <Card.Body>
              <Card.Title ><h1><Badge variant="primary">The Dice Roller</Badge></h1></Card.Title>
              <CardColumns>
                          <Left />
                          <Dice />
                          <Right />
              </CardColumns>
        </Card.Body>
      </Card>
    )
  }
}

export default App;
