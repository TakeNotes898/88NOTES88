import React, { Component } from 'react';

class Item extends Component{
  render(){
    return(
      <React.Fragment>

        <h3>Items</h3>
        <ul>
          <li>{ this.props.listItem }</li>
        </ul>



      </React.Fragment>
    )
  }
}

export default Item;
