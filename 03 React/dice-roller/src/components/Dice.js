import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import one from './img/01.jpg';
// import two from './img/02.jpg';
// import three from './img/03.jpg';
// import four from './img/04.jpg';
// import five from './img/05.jpg';
// import six from './img/06.jpg';




class Dice extends Component{



rollTheDice = () => {
  let theDice = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
  let random = Math.floor(Math.random() * theDice.length)
  this.props.randomNumberRolled(theDice[random])
}




  render(){
    return(
      <React.Fragment>

      <Card bg="dark" text="white" className="text-center p-5">

      <ButtonGroup className="mr-1">
      <p><Button type="submit" size="lg"  variant="primary" onClick={ this.rollTheDice}>RoLL</Button></p>
      </ButtonGroup>

      <ButtonGroup>
      <p><Button size="lg"  type = "reset" variant="danger">Reset</Button></p>
      </ButtonGroup>

        <blockquote className="blockquote mb-0 card-body">

          <h1>{ this.props.numberRolled }</h1>


        </blockquote>
      </Card>


      </React.Fragment>
    )
  }
}

export default Dice;
