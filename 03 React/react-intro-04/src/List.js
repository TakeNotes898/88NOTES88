import React, { Component } from 'react'
import Pulp from './Pulp.js';
import Blond from './Blond.js';
import Edge from './Edge.js';
import Hog from './Hog.js';
import Bourne from './Bourne.js';


class List extends Component{
  render(){
    return(
      <div>

      <ol>
        <li>Pulp Fiction</li>
        <Pulp />
        <li>Legaly Blond</li>
        <Blond />
        <li>The Edge of Tomorrow</li>
        <Edge />
        <li>The Groundhog Day</li>
        <Hog />
        <li>Bourn Identity</li>
        <Bourne />
      </ol>


      </div>
  );
}
};
export default List;
