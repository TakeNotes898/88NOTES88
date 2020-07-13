import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';


class Dice extends Component{


  render(){
    return(
      <React.Fragment>

      <Card bg="primary" text="white" className="text-center p-5">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Here goes the dice
          </p>

        </blockquote>
      </Card>


      </React.Fragment>
    )
  }
}

export default Dice;
