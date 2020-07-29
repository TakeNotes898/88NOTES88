import React, { Component } from 'react'



class Box extends Component{
  constructor(props){
    super(props)
      this.state = {
        coumt: 0
      }
  }




handleChange = () => {
  let newCount = this.state.count + 1;
  this.setState ({ count: newCount })
}





  render(){
    let { count } = this.state




    return(
      <div>
        <h1>Counter: { count }</h1>
        <div class = "box" onClick = {this.handleChange} text-align="center" >PRESS</div>


      </div>
  );
}
};
export default Box;
