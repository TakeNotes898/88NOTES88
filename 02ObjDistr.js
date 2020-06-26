// *****************************************
// *****************************************
//           Object Dustructuring
// *****************************************
// *****************************************

var person = {
  firstName: "Arthur",
  lastName: "Dent",
  getData: function() {
   return `${this.firstName} ${this.lastName} is from the somewhere`
 }
}
var {firstName, lastName, getData} = person;
console.log(firstName);
console.log(lastName);
console.log(person.getData());
// *****************************************
// *****************************************
// *****************************************
var doubleUp = {homePlanet:"Earth"};
person = {...person, ...doubleUp};
var {homePlanet} = person;
console.log(homePlanet);
// *****************************************
// *****************************************
// *****************************************
var addFunc = {
   showFunk: function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
};

person = {...person, ...addFunc};
console.log(person.showFunk());
// console.log(person);


// *****************************************
// *****************************************
//      numero two
// *****************************************
// *****************************************
var product = {
  name: "chair", price: 14.99
}

var newFunk = {
  describeProduct: function() {
    return `the product is the ${this.name}. it costs $ ${this.price}`
  }
}
product = {...product, ...newFunk}
console.log(product.describeProduct());


// *****************************************
// *****************************************
//      numero three
// *****************************************
// *****************************************
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
const {name, type, ingredients} = lunch
lunch.ingredients[2]
console.log(ingredients);
console.log(ingredients[2]);
// *****************************************
// *****************************************
// *****************************************
var newFunkLunch = {
  makeASandwich: function(){
    return `The ingredients for a ${name} ${type} ${ingredients[0]}, ${ingredients[1]} and ${ingredients[2]}.`
  }
}
lunch = {...lunch, ...newFunkLunch}
console.log(lunch);
console.log(lunch.makeASandwich());

// *****************************************
// *****************************************
// *****************************************
var animals = [
  { name1: "Waffles", type1: "dog", age: 12 },
  { name1: "Fluffy", type1: "cat", age: 14 },
  { name1: "Spelunky", type1: "dog", age: 4 },
  { name1: "Hank", type1: "cat", age: 11 },
]
// Create a function that takes in any array of objects
// and returns a new array with only those of type cat.
var caties = animals.filter(value => value.type1 === "cat")
console.log(caties);
// Using the same array of objects above.
// Create a function that returns a new array
// with only the names of the animals.

let newTypeOfArray = {
  onlyNames: function() {
    return `bla bla bla ${name1}`
    // animals.filter(value => value.animals === animals.name1)
  }
}
animals = {...animals, ...newTypeOfArray}
console.log(animals);
// console.log(animals.onlyNames());
({ name1 } = animals);
console.log(name1);



// *****************************************
// *****************************************
// *****************************************












// *****************************************
// *****************************************
// *****************************************
