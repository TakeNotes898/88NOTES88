import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Left extends Component{


  render(){
    return(
      <React.Fragment>

      <Card className="text-center p-3">

        <Card.Body>
          <Card.Title>What Can you Do Here?</Card.Title>
          <Card.Text>
          <p><Button type="submit" size="lg"  variant="danger">RoLL</Button></p>
          <p><Button size="lg"  type = "reset" variant="danger">Reset</Button></p>
          <p><Button size="lg"  href= "XenaDev.com" variant="warning">XenaDev</Button></p>
          </Card.Text>
        </Card.Body>
      </Card>


      </React.Fragment>
    )
  }
}

export default Left;
