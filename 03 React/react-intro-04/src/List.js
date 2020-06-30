import React, { Component } from 'react'
import Pulp from './Pulp.js';
import Blond from './Blond.js';
import Edge from './Edge.js';
import Hog from './Hog.js';
import Bourne from './Bourne.js';
import Counter from './Counter.js';

class List extends Component{
  render(){
    return(
      <div>

      <ol>
        <h2><li>Pulp Fiction</li></h2>
        <p><Counter /></p>
        <Pulp />
        <h2><li>Legaly Blond</li></h2>
        <p><Counter /></p>
        <Blond />
        <h2><li>The Edge of Tomorrow</li></h2>
        <p><Counter /></p>
        <Edge />
        <h2><li>The Groundhog Day</li></h2>
        <p><Counter /></p>
        <Hog />
        <h2><li>Bourn Identity</li></h2>
        <p><Counter /></p>
        <Bourne />
      </ol>


      </div>
  );
}
};
export default List;
