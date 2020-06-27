// *****************************************
// *****************************************
// *****************************************
// There are particular JavaScript keywords that are used to create and access information within a class:
// *****************************************
// *****************************************
// *****************************************

class Squirrel0{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}
// creating the instance of the class, saved as a variable
// rocky now has access to the class methods
var rocky = new Squirrel0()

console.log(rocky.nutCount)
rocky.storeNut()
console.log(rocky.nutCount)
rocky.storeNut()
console.log(rocky.nutCount)

rocky.eatNut()
console.log(rocky.nutCount)

// *****************************************
// *****************************************
// *****************************************
// Just like functions, classes are reusable. Each object created from the class is independent from each other.
// *****************************************
// *****************************************
// *****************************************

class Squirrel1{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}

var rocky = new Squirrel1()
var alvin = new Squirrel1()

alvin.storeNut()
alvin.storeNut()

console.log("Rocky has ", rocky.nutCount )

console.log("Alvin has ", alvin.nutCount )

// *****************************************
// *****************************************
// *****************************************
// Class instances can be usedlike any other 'thing' in JavaScript. We can rewrite the above like this:
// *****************************************
// *****************************************
// *****************************************


class Squirrel2{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}
// create a new array
var squirrels = []
// pushes new squirrel objects into the array
squirrels.push(new Squirrel2())
squirrels.push(new Squirrel2())

// accessing the object at array index 0
squirrels[0].storeNut()
squirrels[0].storeNut()

// mapping over array to access the information from the squirrels array
squirrels.map((value, index) => {
  console.log(`The squirrel at index ${index} has ${value.nutCount} nuts.`)
})

// *****************************************
// *****************************************
// *****************************************
// Class instances can store any kind of data.
// *****************************************
// *****************************************
// *****************************************

class DiceRoller1{
  constructor(){
    this.rolls = []
  }

  roll(){
    // generating a random number between 1 and 6 and pushing to the this.rolls array
    this.rolls.push(Math.ceil(Math.random() * 6))
  }

  lastRoll(){
    //logging the last roll added to the array
    return this.rolls[this.rolls.length - 1]
  }
}

var roller = new DiceRoller1()
console.log("Roll:", roller.lastRoll())

roller.roll()
console.log("Roll:", roller.lastRoll())

roller.roll()
console.log("Roll:", roller.lastRoll())

console.log("All Rolls:", roller.rolls)


// *****************************************
// *****************************************
// *****************************************
// The constructor method can take arguments.
// This creates objects with unique data.
// *****************************************
// *****************************************
// *****************************************

class Dog1{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  description(){
    return `${this.name} is a ${this.age} year old dog.`
  }
}
// now when creating the new object, the constructor method is expecting two arguments: a name and an age
var rover = new Dog1('Rover', 4)
console.log(rover.description())

// We can use the Dog class to create many different dog objects with different properties.

var plato = new Dog1('Plato', 8)
var bella = new Dog1('Bella', 11)

console.log(plato.description())
console.log(bella.description())

// Objects are still just variables that reference a class. Variables in JavaScript can be reassigned.

console.log(plato.description())
console.log(bella.description())
bella = plato
console.log(bella.description())

// *****************************************
// *****************************************
// *****************************************

// Write the code that makes a black coffee.

class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

var blackCofee = new Coffee ('blAck CoFFee', 0, 0)
console.log(blackCofee.coffeeProfile());

var blackCofee = new Coffee ('blAck CoFFee', 1, 2)
console.log(blackCofee.coffeeProfile());

var blackCofee = new Coffee ('blAck CoFFee', 0, 2)
console.log(blackCofee.coffeeProfile());

blackCofee.sugar()
console.log(blackCofee.sugar());

// *****************************************
// *****************************************
// *****************************************














// *****************************************
// *****************************************
// *****************************************











// *****************************************
// *****************************************
// *****************************************
