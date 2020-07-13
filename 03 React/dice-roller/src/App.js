import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import cover from './img/cover.jpg'





class App extends Component{







  render(){
    return(
      <React.Fragment class="theBody">



      <Card >





        <Card.Img variant="top" src= { cover }/>
        <Card.Body>

          <Card.Title><h1><Badge variant="danger">The Dice Roller</Badge></h1></Card.Title>

          <Card.Text>Lets roLLLLLLLLLL</Card.Text>

          <p><Button variant="primary">RoLlll</Button></p>
          <p><Button value = "reset" variant="primary">Reset</Button></p>
          <p><Button href= "XenaDev.com" variant="primary">XenaDev</Button></p>
        </Card.Body>
      </Card>

      </React.Fragment>
    )
  }
}

export default App;
