//
// // *****************************************
// // *****************************************
// // *****************************************
// //     INHERITENCE
// // *****************************************
// // *****************************************
// // *****************************************
//
// class Engine1{
//   constructor(){
//     this.oilLevel = 100
//     this.rpm = 0
//   }
// }
// // calling new Engine() is just like sending the plans to the production floor to have it built
// let engine1 = new Engine1()
// console.log(engine1)
// // now that we have an instance of our engine to interact with
// console.log("oil:", engine1.oilLevel)
// console.log("rpm:", engine1.rpm)
//
// // *****************************************
// // *****************************************
// // *****************************************
// //We now have an engine, and can ask it details about its current state.
// // But what if we want to be able to turn the engine on, and have it do some work for us?
// // Remember that classes are collections of attributes and behavior, we can add a method to the class that turns the engine on and off.
// // Now we have an Engine class that has attributes and behavior.
// // *****************************************
// // *****************************************
// // *****************************************
// class Engine2{
//   constructor(){
//     this.oilLevel = 100
//     this.rpm = 0
//   }
//
//   start(){
//     this.rpm = 500
//   }
//
//   stop(){
//     this.rpm = 0
//   }
// }
//
// let engine2 = new Engine2()
//
// console.log("rpm:", engine2.rpm)
//
// // call the method start on the engine object variable to alter the rpm
// engine2.start()
// console.log("rpm:", engine2.rpm)
//
// engine2.stop()
// console.log("rpm:", engine2.rpm)

// *****************************************
// *****************************************
// *****************************************
// We start with an Engine class that has properties common to all engines.
// Then we can create another class that can inherit from the Engine class but also have its own specialized data and methods.
// This is a parent - child inheritance relationship.
// *****************************************
// *****************************************
// *****************************************
//
// class Engine3{
//   constructor(){
//     this.oilLevel = 100
//     this.rpm = 0
//     this.light = "OFF"
//     // this.speed = 0
//   }
//
//   start(){
//     this.rpm = 500
//   }
//
//   stop(){
//     this.rpm = 0
//   }
//   lights(){
//     this.light = "ON"
//   }
// }
//
// class TurboEngine3 extends Engine3{ //used in the declaration of the class, extending the data and behavior of the parent class (or the class we are inheriting from)
//   constructor(){
//     super()  // within in the constructor method we call super() which passes the attributes from the constructor in the parent class
//   }
// }
// var turbo = new TurboEngine3()
// console.log(turbo)
// console.log("LIGHT:", turbo.light);
// turbo.lights()
// console.log("LIGHT:", turbo.light);
// console.log(turbo)
// // *****************************************
// // *****************************************
// // *****************************************
// // The TurboEngine class also can have information that is specific to its class, like attributes (data) like horsepower and behavior (methods) like acceleration and deceleration.
// // *****************************************
// // *****************************************
// // *****************************************
//
// class TurboEngine4 extends Engine3{
//   constructor(){
//     super()
//     this.horsepower = 450
//   }
//   accelerate(){
//     this.rpm = 750
//   }
//   decelerate(){
//     this.rpm = 0
//   }
// }
// var turbo = new TurboEngine4()
// console.log(turbo)
//
// turbo.accelerate()
// console.log("rpm:", turbo.rpm)
//
// // *****************************************
// // *****************************************
// // *****************************************
// // We can create another class called StockEngine that also inherits from Engine.
// // The class StockEngine has access to the information from the parent class of Engine as well as its own unique data and methods.
// // *****************************************
// // *****************************************
// // *****************************************
//
// class StockEngine3 extends Engine3{
//   constructor(){
//     super()
//     this.horsepower = 250
//   }
//   accelerate(){
//     this.rpm = 250
//   }
//   decelerate(){
//     this.rpm = 0
//   }
// }
// var stock = new StockEngine3()
// console.log(stock)
//
// stock.accelerate()
// console.log("rpm:", stock.rpm)
//
// stock.decelerate()
// console.log("rpm:", stock.rpm)
//
// console.log("light:", stock.light);
// stock.lights()
// console.log("light:", stock.light);
// console.log(stock);
// // *****************************************
// // *****************************************
// // *****************************************
// //          CHALLENGES
// // *****************************************
// // *****************************************
// // *****************************************
//
// // Story: As a programmer, I can make a car.

class Car {
  constructor(){
    this.model = "generic car"
    this.year = 2000
    this.light = "OFF"
    this.signal = "OFFFF"
    this.speed = 0
  }
  wheels (){
    return `4 wheels`
  }
  lightOn(){
    this.light = "ON"
  }
  lightOff(){
    this.light = "Off"
  }
  signalOn(){
    this.signal = "ON"
  }
  signalOff(){
    this.signal = "Off"
  }
  speedUp(){
    this.speed = 75
  }
  speedDown(){
    this.speed -= 25
  }
  speedStop(){
    this.speed = 0
  }
};

var myCar = new Car();
console.log(myCar);
console.log(myCar.wheels());

myCar.lightOn();
console.log("the lights are:", myCar.light);
console.log(myCar);
// *****************************************
class Tesla extends Car{
  constructor(){
    super()
  }
}
var myTesla = new Tesla();

myTesla.lightOn();
console.log("the lights are:", myTesla.signal);
console.log(myTesla);
// *****************************************
class Toyota extends Car{
  constructor(){
    super()
  }
}
var myToyota = new Toyota();
myToyota.signalOn()
console.log(myToyota);
// *****************************************
class Volkswagen extends Car{
  constructor(){
    super()
  }
}
var myVolkswagen = new Volkswagen();
console.log(myVolkswagen);
myVolkswagen.lightOn()
console.log(myVolkswagen);
myVolkswagen.lightOff()
myVolkswagen.speedUp()
myVolkswagen.speedDown()
myVolkswagen.speedDown()
console.log(myVolkswagen);





// *****************************************
// *****************************************
// *****************************************
//
// *****************************************
// *****************************************
// // *****************************************
