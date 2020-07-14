import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Left extends Component{




  rollTheDice = () => {
    let theDice = [1, 2, 3, 4, 5, 6]
    let random = Math.floor(Math.random() * theDice.length)
    this.props.randomNumberRolled(theDice[random])
  }

  render(){
    return(
      <React.Fragment>

      <Card className="text-center p-3">

        <Card.Body>
          <Card.Title>What Can you Do Here?</Card.Title>
          <Card.Text>
          
          <p><a href="http://xenadev.com" target="_blank"><Button size="lg" variant="warning">XenaDev</Button></a></p>
          </Card.Text>
        </Card.Body>
      </Card>


      </React.Fragment>
    )
  }
}

export default Left;
