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
  name1: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
const {name1, type, ingredients} = lunch
lunch.ingredients[2]
console.log(ingredients);
console.log(ingredients[2]);
// *****************************************
// *****************************************
// *****************************************
var newFunkLunch = {
  makeASandwich: function(){
    return `The ingredients for a ${name1} ${type} ${ingredients[0]}, ${ingredients[1]} and ${ingredients[2]}.`
  }
}
lunch = {...lunch, ...newFunkLunch}
console.log(lunch.makeASandwich());

// *****************************************
// *****************************************
// *****************************************
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
// Create a function that takes in any array of objects
// and returns a new array with only those of type cat.
var caties = animals.filter(value => value.type === "cat")
console.log(caties);
// Using the same array of objects above.
// Create a function that returns a new array
// with only the names of the animals.
const onlyNames = animals.map(
  function({ name }) {
    return name;})
console.log(onlyNames);
// *****************************************
// *****************************************
// *****************************************
let author = {
    name2: "H. G. Wells",
    genre: "science fiction"
}
console.log(`${author.name2} is a ${author.genre} author`)
var {name2, genre} = author;
console.log(`${name2} is a ${genre} author`)
// *****************************************
// *****************************************
// *****************************************
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}

var describePokemonToday = {
  describePokemon: function(){
    return `${this.species} is a ${this.pokemon_type} pokemon.`
  }
};

var pokeType = {
  0: { ...pokeOne, ...describePokemonToday },
  1: { ...pokeTwo, ...describePokemonToday }
}
var {species, pokemon_type, describePokemon} = pokeType;
console.log(pokeType);

console.log(pokeType.describePokemon('1'));
console.log(describePokemon(pokeTwo))


// *****************************************
// *****************************************
// *****************************************











// *****************************************
// *****************************************
// *****************************************
