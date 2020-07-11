import React, { Component } from 'react';
import Item from './components/Item.js'
import WildCard from './components/WildCard.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      listItems: [ 'apples', 'yogurt', 'pineapple', 'milk', 'bluberries', 'ice cream' ],
      hardWareItems: ['lightbulb' , 'hammer', 'axe', 'nails'],
      wildCardChore: ['laundry' , 'dishes', 'make bed', 'dust', 'bush toffese', 'drink coffee', 'go to hte bank'],
      dailyChore: ""
    }
  }


  addChore = () => {
    let random = Math.floor(Math.random() * this.state.wildCardChore.length)
    this.setState({ dailyChore: this.state.wildCardChore[random]})
  }



  render(){
    return(
      <React.Fragment>
        <h1>To Do List</h1>
        <Item list = {this.state.listItems} store="Grocery" />,
        <Item list = {this.state.hardWareItems} store="Hardware" />
        <WildCard dailyChore = {this.state.dailyChore}/>
        <button onClick={ this.addChore}>Add Chore</button>


      </React.Fragment>
    )
  }
}

export default App;
