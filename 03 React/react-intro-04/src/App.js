import React from 'react';
import './App.css';
import Header from './Header.js';
import List from './List.js';


class App extends React.Component{
  render(){
    return(
      <div>
          <div className="App">
            <Header />
          </div>

            <List />
      </div>
  );
}
};
export default App;
