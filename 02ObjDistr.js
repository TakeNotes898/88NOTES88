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



// *****************************************
// *****************************************
// *****************************************








// *****************************************
// *****************************************
// *****************************************
