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
// OH WOWOWOWOWOOWOOW!!!!!!
// *****************************************

var theMainArr = [2, 3, 4, 5, 3, 8, 9]

var oddOrEven1 = (totalyNewArr) => {
  let newArr = [];
  for (let i=0; i<totalyNewArr.length; i++){
    if (totalyNewArr[i] % 2 == 0) {
        newArr.push("EVEN")
    } else if (totalyNewArr[i] % 2 == 1) {
        newArr.push("ODD")
    }
  }
  return newArr;
}
console.log(oddOrEven1(theMainArr));


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

// *****************************************
// *****************************************
// *****************************************

var superArrayForAllTheLoops = [3, 5, 100, 7, 99, 8, -9, 3, -10, 43, 32]

var multiplyBy3 = (numbers) => {
  let newArrayNumberOne = [];
  for (let i=0; i<numbers.length; i++) {
    newArrayNumberOne.push(numbers[i] * 3)
  }
  return newArrayNumberOne
}
console.log(multiplyBy3(superArrayForAllTheLoops));

// *****************************************
// *****************************************
// *****************************************

var returnOnlyOdd = (numbers) => {
  let newArrNumberTwo = [];
  for (let i=0; i<numbers.length; i++){
    if (numbers[i] % 2 == 0){
      newArrNumberTwo.push(numbers[i])
    }
  }
  return newArrNumberTwo
}
console.log(returnOnlyOdd(superArrayForAllTheLoops));

// *****************************************
// *****************************************
// *****************************************

var weirdResponse = "whacha doing yo yo yo!"

var capitalizeRomeo = (str) => {
  return str.toUpperCase()
}
console.log(capitalizeRomeo(weirdResponse));
// *****************************************
// *****************************************
// *****************************************

var weirdStringOne = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

var justSpeakToMeNormal = (str) => {
  return str.filter(element => typeof element == "string").join("")

}
console.log(justSpeakToMeNormal(weirdStringOne));
console.log(typeof weirdStringOne);


// *****************************************
// *****************************************
// *****************************************

var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

var letUsFindTheHighestNumber = (numb) => {
  return Math.max.apply(null, numb)
}
console.log(letUsFindTheHighestNumber(highestNumber));

// *****************************************
// *****************************************
// *****************************************

var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

var letUsFindTheLowestNumber = (numb) => {
  return Math.min.apply(null, numb)
}
console.log(letUsFindTheLowestNumber(lowestNumber));

// *****************************************
// *****************************************
// *****************************************

var addThese1 = [1, 2, 3, 4]
var addThese2 = []

var letsSumThisUp = (numb) => {
  let sum = 0
  for (i=0; i<numb.length; i++){
    sum +=numb[i]
  }
  return sum
}
console.log(letsSumThisUp(addThese1));
console.log(letsSumThisUp(addThese2));


// *****************************************
// *****************************************
// *****************************************

var meanChecker = [1, 2, 3, 8, 9, 8, 90, 150]

var calculateTheMean = (meany) => {
  let mean = 0;
  for (i=0; i< meany.length; i++){
    mean +=meany[i]/meany.length;
  }
  return mean
}
console.log(calculateTheMean(meanChecker));

// *****************************************
// *****************************************
// *****************************************
// Create a function that finds the index of the highest number

var indexHighestNumber = [100, 1, 4, 200, 2, 6]
// creat a function
var findTheIndexOfHighestNumber = (hindex) => {
// assign two new variables for the max number and the index
  let highestIndex = 0;
  let max = hindex[0];
  //create for loop that goes through the array
  for (i=0; i<hindex.length; i++){ // find the highest number
  // if the number in array is bigger than the hindex[0]
    if (hindex[i] > max) {
      //assign the index
      highestIndex = i;
      max = hindex[i];
    }
  } // return the highest index
  return highestIndex
}
console.log(findTheIndexOfHighestNumber(indexHighestNumber));


// *****************************************
// *****************************************
// *****************************************










// *****************************************
// *****************************************
// *****************************************
