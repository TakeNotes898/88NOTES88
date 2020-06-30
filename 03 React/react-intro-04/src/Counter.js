// *****************************************
// *****************************************
// We imported counter and called a Counter component in the return section.
// Now we will create the Counter component. Our Counter component will hold state.
// *****************************************
// *****************************************

import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
      }
  }

  // *****************************************
  // *****************************************
  // Now let's create our handleChange function so our application knows what to do when the button is pressed.
  // The handleChange function takes this.state.count and adds one to the value then saves the new value in a variable called newCount.
  // By calling this.setState() and setting the state object key count to our newCount variable.
  // *****************************************
  // *****************************************

  handleChange = () => {
      let newCount = this.state.count + 1
      this.setState({ count: newCount })
    }



  // *****************************************
  // *****************************************
  // We then see a render method and a return.
  // In the return section we are displaying the value of our state object by calling this.state.count.
  // We can simplify this slightly with object destructuring.
  // *****************************************
  // *****************************************

  render() {
    let { count } = this.state

    return (
      /* this instead of Counter: { this.state.count } */
      <div>
        <h2>Counter: { count }</h2>
        <button onClick = { this.handleChange }>
          How many times you want to see this movie!
        </button>
      </div>
    )
  }
}

export default Counter
