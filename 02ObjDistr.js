// *****************************************
// *****************************************
//           Object Dustructuring
// *****************************************
// *****************************************

var person = {
  firstName: "Arthur",
  lastName: "Dent"
}
var {firstName, lastName} = person;
console.log(firstName);
console.log(lastName);
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
  showFunk:function() {
    return "hello"
    // `${person.fisrtName} ${person.lastName} is from the ${person.homePlanet}`;
  }
};
person = {...person, ...addFunc};
console.log(person);
// console.log(person.givItAFunctionCauseThatsCool());
// console.log(person.givItAFunctionCauseThatsCool());




// *****************************************
// *****************************************
// *****************************************







// *****************************************
// *****************************************
// *****************************************








// *****************************************
// *****************************************
// *****************************************
