import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Image from 'react-bootstrap/Image'
// import one from './img/01.jpg';
// import two from './img/02.jpg';
// import three from './img/03.jpg';
// import four from './img/04.jpg';
// import five from './img/05.jpg';
// import six from './img/06.jpg';


class Dice extends Component{



rollTheDice = () => {
  let theDice = [1, 2, 3, 4, 5, 6];
  let random = Math.floor(Math.random() * theDice.length)
  this.props.randomNumberRolled(theDice[random])
}


  render(){
    return(
      <React.Fragment>

          <Card className="text-center p-3">
            <Card.Body>
              <Card.Title>What Can you Do Here?</Card.Title>
              <ButtonGroup className="mr-1"><p><Button type="submit" size="lg"  variant="primary" onClick={ this.rollTheDice}>RoLL</Button></p></ButtonGroup>
              <ButtonGroup><p><Button size="lg"  type="reset" variant="danger">Reset</Button></p></ButtonGroup>
              <ButtonGroup><p><Button size="lg" variant="warning"><a href="http://xenadev.com" target="_blank">XenaDev</a></Button></p></ButtonGroup>
            </Card.Body>
          </Card>


          <Card bg="dark" text="white" className="text-center p-5">
            <blockquote className="blockquote mb-0 card-body">
              <h1>{ this.props.numberRolled }</h1>
            </blockquote>
          </Card>


          <Card className="text-center p-3">
            <Card.Body>
              <Card.Title>What Have we rolled</Card.Title>
              <Card.Text>
                you need to put here the code that will record what we have rolled
              </Card.Text>
            </Card.Body>
          </Card>


      </React.Fragment>
    )
  }
}

export default Dice;
