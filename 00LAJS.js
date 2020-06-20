// *****************************************
// *****************************************
//           Function practice
// *****************************************
// *****************************************


var marco = () => {
  return "polo"
}

console.log(marco());

// *****************************************
// *****************************************
// *****************************************


var greetings = (name) => {
  return `Welcome, ${name}!` // backticks are used in this instance
}
console.log(greetings("Xena"));


// *****************************************
// *****************************************
// smth aint working here :(((())))
// *****************************************

var arr1 = [2, 3, 4, 5, 3, 8, 9]

var oddOrEven1 = () => {
  let newArr = [];
  for (let i=0; i<arr1.length; i++){
    if (arr1[i] % 2 == 0) {
      return "EVEN!"
    } else  {
      return "ODD!"
      // console.log(oddOrEven1(3));
    }
    return newArr;
  }
}
console.log(oddOrEven1(arr1));
// console.log(newArr);


// *****************************************
// *****************************************
// *****************************************


var oddOrEven = (num) => {
  if (num % 2 === 0) {
    return "Even Stieven!!!"
  } else if(num % 2 === 1) {
    return "ODD as a Bird!!!"
  } else {
    return "this is one intersting penguin!"
  }
  return oddOrEven();
}

console.log(oddOrEven(10));
console.log(oddOrEven(3));
console.log(oddOrEven(99899898989898));
console.log(oddOrEven(3.14));

// *****************************************
// *****************************************
// *****************************************


var tripleDimple = (numero) => {
  return (numero * 3)
}
console.log(tripleDimple(7));


// *****************************************
// *****************************************
// *****************************************

var multiplyFtuitiFly = (z, x) => {
  return (z * x);
}
console.log(multiplyFtuitiFly(11, 11));

// *****************************************
// *****************************************
// *****************************************

var diviseDontMultiply = (kong, foo) => {
  if (kong % foo == 0) {
    return `${kong} is divisible by ${foo}`
  } else {
    return `this is all wrong, you can not evenly devide ${kong} by ${foo}`
  }
}
console.log(diviseDontMultiply(10, 5));
console.log(diviseDontMultiply(5, 10));

// *****************************************
// *****************************************
// *****************************************

var assignTheGradeToIt = (num) => {
  if (num >= 90){
    return "AAA to the rescue"
  } else if (num >= 80){
    return "Beach is close"
  } else if (num >= 70){
    return "Cool beans, it is more than accpected"
  } else if (num >= 60){
    return "Doing is not neccessaraly thinking, think about it!"
  } else {
    return "For no reason you should be not thinking about a career change?"
  }
}
console.log(assignTheGradeToIt(90));
console.log(assignTheGradeToIt(80));
console.log(assignTheGradeToIt(70));
console.log(assignTheGradeToIt(60));
console.log(assignTheGradeToIt(50));


// *****************************************
// *****************************************
// *****************************************


var theGreatestOfThemAllWillRuleThePlanet = (ying, yang) => {
  if (ying > yang) {
    return `I THE ${ying} will rule over ${yang}`
  } else if (ying < yang) {
      return `i ${yang} is more humble, but screw it! I RULE OVER ${ying}`
  }

}
console.log(theGreatestOfThemAllWillRuleThePlanet(88888,5));
console.log(theGreatestOfThemAllWillRuleThePlanet(1,99999));


// *****************************************
// *****************************************
// *****************************************


var theWorldOxfordDictionaryIsHereFinaly = (slang) => {
  if (slang == "de") {
    return "Ich werde die Welt regieren Hallo"
  } else if (slang == "fr") {
    return "Je gouvernerai le monde Bonjour"
  } else if (slang == "ru") {
    return "Я буду править миром Привет"
  } else {
    return "I will rule the world Hello"
  }
}
console.log(theWorldOxfordDictionaryIsHereFinaly("de"));
console.log(theWorldOxfordDictionaryIsHereFinaly("fr"));
console.log(theWorldOxfordDictionaryIsHereFinaly("ru"));
console.log(theWorldOxfordDictionaryIsHereFinaly("i have not decided yet"));

// *****************************************
// *****************************************
// *****************************************

const pluralizerPluralizerPluraPluraPlralizer = (thingi, amountOfThingi) =>{
  if (thingi == "cat" && amountOfThingi > 2) {
      return `the ${amountOfThingi} ${thingi}s`
  } else if (thingi == "goose" && amountOfThingi > 2){
      return `the ${amountOfThingi} geese`
  }  if (thingi == "sheep" && amountOfThingi > 2){
      return `the ${amountOfThingi} sheepazoids`
  } else if (thingi == "child" && amountOfThingi > 2){
      return `the ${amountOfThingi} childrenazoids`
  } else if (thingi == "person" && amountOfThingi > 2){
      return `the ${amountOfThingi} personazoids`
  } else {
      return `the ${amountOfThingi} ${thingi}`
  }
}
console.log(pluralizerPluralizerPluraPluraPlralizer("cat", 5));
console.log(pluralizerPluralizerPluraPluraPlralizer("cat", 1));
console.log(pluralizerPluralizerPluraPluraPlralizer("sheep", 5));
console.log(pluralizerPluralizerPluraPluraPlralizer("goose", 5));
console.log(pluralizerPluralizerPluraPluraPlralizer("child", 5));
console.log(pluralizerPluralizerPluraPluraPlralizer("person", 5));
