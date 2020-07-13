import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Right extends Component{


  render(){
    return(
      <React.Fragment>

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

export default Right;
