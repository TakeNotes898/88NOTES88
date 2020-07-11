import React, { Component } from 'react';
import Item from './components/Item.js'
import './App.css';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <h1>To Do List</h1>
        <Item listItem = "apples" />



      </React.Fragment>
    )
  }
}

export default App;
