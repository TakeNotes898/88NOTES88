import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import zero from '../img/00.jpg';
import one from '../img/01.jpg';
import two from '../img/02.jpg';
import three from '../img/03.jpg';
import four from '../img/04.jpg';
import five from '../img/05.jpg';
import six from '../img/06.jpg';


class Dice extends Component{
  constructor(){
    super();
    this.state={
      numberHolder : 0,
      numRecorded : [],
      rollSum : 0,
      rollAvarage : 0,
      timesRolled : 0
     }
    }




diceImg = (imgs) => {
    let theDice = [zero, one, two, three, four, five, six]
    return theDice[ imgs ]
}

rollTheDice = () => {
  let random = Math.ceil(Math.random() * 6)
  let newRandom = [random]
  this.setState({ numberHolder : random, numRecorded : this.state.numRecorded.concat([newRandom])})
}


letsGetRollsSum() {
  let newCount = this.state.numberHolder + this.state.rollSum
  this.setState({ rollSum : newCount })
  return this.state.rollSum
  }


letsGetTheAvarage = () => {
    let newRollAvarage = this.state.rollSum / this.state.timesRolled
    this.setState({ rollAvarage: newRollAvarage.toFixed(2) })
    return this.state.rollAvarage
}


letsGetTimesRolles = () => {
  this.setState ({timesRolled : this.state.timesRolled + 1});
}


reset = () => {
        window.location.reload()
    }

  render(){


    return(
      <React.Fragment>

          <Card className="text-center p-3">
            <Card.Body>
              <Card.Title>
              <h5>What Can you Do Here?</h5>
              </Card.Title>
              <h6>just roll and see the dice go</h6>
              <ButtonGroup className="mr-1"><p><Button type="submit" size="sm"  variant="primary"
                onClick = {() => {
                this.rollTheDice();
                this.letsGetTheAvarage();
                this.letsGetTimesRolles();
                this.letsGetRollsSum()}}>
              RoLL</Button></p></ButtonGroup>

              <ButtonGroup className="mr-1"><p><Button size="sm"  onClick = {this.reset} variant="danger">Reset</Button></p></ButtonGroup>

              <ButtonGroup><p><Button size="sm" variant="warning"><a href="http://xenadev.com" target="_blank">by XenaDev</a></Button></p></ButtonGroup>

              <Card.Text>
              <p>You rolled: { this.state.numberHolder } </p>
              <p>the SUM IS: {  this.state.rollSum} </p>
              <p>the Avarage IS: { this.state.rollAvarage } </p>
              <p>the Times Rolled: { this.state.timesRolled } </p>
              </Card.Text>
            </Card.Body>
          </Card>


          <Card bg="dark" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <h1>{ this.props.numberRolled }
              <img width='100%' src = { this.diceImg(this.state.numberHolder) }/></h1>
            </blockquote>
          </Card>


          <Card className="text-center p-3">
            <Card.Body>
              <Card.Title>What Have we rolled</Card.Title>
              <Card.Text className="orderedList">
                  {this.state.numRecorded.map(value => <p>{value}</p>)}
              </Card.Text>
            </Card.Body>
          </Card>


      </React.Fragment>
    )
  }
}

export default Dice;
