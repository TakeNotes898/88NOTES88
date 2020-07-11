import React, { Component } from 'react';
import Item from './components/Item.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      listItems: [ 'apples', 'yogurt', 'pineapple', 'milk', 'bluberries', 'ice cream' ],
      hardWareItems: ['lightbulb' , 'hammer', 'axe', 'nails']
    }
  }
  render(){
    return(
      <React.Fragment>
        <h1>To Do List</h1>
        <Item list = {this.state.listItems} />
        <Item list = {this.state.hardWareItems} />



      </React.Fragment>
    )
  }
}

export default App;
