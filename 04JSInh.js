
// *****************************************
// *****************************************
// *****************************************
//     INHERITENCE
// *****************************************
// *****************************************
// *****************************************

class Engine1{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }
}
// calling new Engine() is just like sending the plans to the production floor to have it built
let engine1 = new Engine1()
console.log(engine1)
// now that we have an instance of our engine to interact with
console.log("oil:", engine1.oilLevel)
console.log("rpm:", engine1.rpm)

// *****************************************
// *****************************************
// *****************************************
//We now have an engine, and can ask it details about its current state.
// But what if we want to be able to turn the engine on, and have it do some work for us?
// Remember that classes are collections of attributes and behavior, we can add a method to the class that turns the engine on and off.
// Now we have an Engine class that has attributes and behavior.
// *****************************************
// *****************************************
// *****************************************
class Engine2{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }

  start(){
    this.rpm = 500
  }

  stop(){
    this.rpm = 0
  }
}

let engine2 = new Engine2()

console.log("rpm:", engine2.rpm)

// call the method start on the engine object variable to alter the rpm
engine2.start()
console.log("rpm:", engine2.rpm)

engine2.stop()
console.log("rpm:", engine2.rpm)

// *****************************************
// *****************************************
// *****************************************
//
// *****************************************
// *****************************************
// *****************************************
