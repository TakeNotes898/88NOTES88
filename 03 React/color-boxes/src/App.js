import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Box from './Box.js'


function App() {
  return (
    <div>
      <header><img src={logo} className="App-logo" alt="logo" /></header>
        <div className="App">
            <Header />
            <Box />
            <Box />
          
        </div>
    </div>
  );
}

export default App;
