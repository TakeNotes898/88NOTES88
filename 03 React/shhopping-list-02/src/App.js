import React, { Component } from 'react';
import Item from './components/Item.js'
import WildCard from './components/WildCard.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dailyChore: ""
    }
  }


  addDailyChore = (chore) => {
    this.setState({ dailyChore: chore })
  }



  render(){
    return(
      <React.Fragment>
        <h1>To Do List</h1>
        <WildCard
          addDailyChore={this.addDailyChore}
          dailyChore={this.state.dailyChore}
          />



      </React.Fragment>
    )
  }
}

export default App;
