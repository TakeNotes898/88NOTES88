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


// Create a function that takes in a string and returns only the middle value
var finger1 = "hello"
var finger2 = "boogeyman"

let findTheMiddleSomething = (finger) =>{

  // let middleFinger = '';

  // for (i=0; i<finger.length; i++){

      // if (finger.length>0){
        return finger.charAt(Math.floor(finger.length/2));
      // }

  // }
  // return middleFinger
}
console.log(findTheMiddleSomething(finger1));
console.log(findTheMiddleSomething(finger2));

// *****************************************
// *****************************************
// *****************************************

// Palindrome: Create a function that takes in a string and
// determines whether the string is a palindrome
// (the same word forward and backwards)

var isPalindrome1 = "racecar"
var isPalindrome2 = "albatross"

let findThePalindrome = (drome) =>{
  if (drome.split('').reverse().join('') === drome){
    return `${drome} is the freaking polindrome`
  } else if (drome.split('').reverse().join('') !== drome){
    return `${drome} is NOT a POLINDROME`
  }
}

console.log(findThePalindrome(isPalindrome1));
console.log(findThePalindrome(isPalindrome2));
console.log(findThePalindrome('mom'));

// *****************************************
// *****************************************
// *****************************************

// Vowels Removed: Create a function that takes in a string
// and returns a new string with all the vowels removed

var fullString1 = "javascript is awesome"
var fullString2 = "I am a LEARN student"

let takeOutVowekls = (noToVowels) =>{
    return noToVowels.replace(/[`aeiou`]/gi,'')
}
console.log(takeOutVowekls(fullString1));
console.log(takeOutVowekls(fullString2));


// *****************************************
// *****************************************
// *****************************************

// Merge Arrays: Create a function that takes in two arrays as arguments
// and returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
var arr3 = arr1.concat(arr2)

let checkArrays = (sameNumCheck) =>{
    let uniqueSet = [... new Set(sameNumCheck)];
    return uniqueSet;
}
console.log(checkArrays(arr3));

// *****************************************
// *****************************************
// *****************************************

// Clean Function: Create a function
// that filters false, null, 0 and blank values from an array.

var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

let cleanUpYourArray = (noNull) =>{
    return noNull.filter(value => value !== null && value !== false && value !== 0 && value !== ' ');
}
console.log(cleanUpYourArray(filterArrayValues));

// *****************************************
// *****************************************
// *****************************************

// Pre-fill: Write a function that takes in two numbers as arguments
// and returns an array the length of the first number filled with the second number.

let theFillerUp = (x, z) =>{
  let newArr = new Array(x);
  for ( i=0; i<x ; i++){
    newArr[i] = z;
  }
  return newArr;
}

console.log(theFillerUp(6, 0));
console.log(theFillerUp(4, 11));



// *****************************************
// *****************************************
// *****************************************

// Create a function named addUp that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let addUpStuff = (num) =>{
  let newArr = 0;
  for (i = 1; i <= num; i++){
    newArr += i;
  }
  return newArr
}

console.log(addUpStuff(4));
console.log(addUpStuff(13));
console.log(addUpStuff(600));
console.log(addUpStuff(11));

// *****************************************
// *****************************************
// *****************************************
