import React from 'react';
import './App.css';
import Header from './Header.js';
import List from './List.js';
import Counter from './Counter.js';


class App extends React.Component{
  render(){
    return(
      <div>
          <div className="App">
            <Header />
            <Counter />
          </div>

            <List />
      </div>
  );
}
};
export default App;
