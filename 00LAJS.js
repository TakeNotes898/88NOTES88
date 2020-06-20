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
// *****************************************

var arr1 = [2, 3, 4, 5, 3, 8, 9]

var oddOrEven1 = (num1) => {
  for (let i=0; i>0; i++){
    if (arr1[i] % 2 == 0) {
      return "EVEN!"
    } else  {
      return "ODD as a bird!"
      // console.log(oddOrEven1(3));
    }
  }
  // return oddOrEven1();
}
console.log(oddOrEven1(arr1));;


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
