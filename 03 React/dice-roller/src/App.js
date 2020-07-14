import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import cover from './img/cover.jpg';
import Dice from './components/Dice.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numberRolled: "",
      numRecorded : []
    }
  }

  randomNumberRolled = (num) => {
    this.setState({ numberRolled: num })
  }




  render(){
    return(
      <Card >
        <Card.Img variant="top" src= { cover }/>
        <Card.Body>
              <Card.Title ><h1>
              <Badge variant="danger">The Dice Roller</Badge>
              </h1></Card.Title>


              <CardColumns>
                  <Dice
                    randomNumberRolled={this.randomNumberRolled}
                    numberRolled={this.state.numberRolled}
                    numRecorded = {this.state.numRecorded} />
              </CardColumns>


        </Card.Body>
      </Card>
    )
  }
}

export default App;
