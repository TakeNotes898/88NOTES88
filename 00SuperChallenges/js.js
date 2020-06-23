
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message





var guess = prompt('I am thinking of a random number between 1 and 100. What is it?');

var randomNumber = Math.floor(Math.random() * 100 ) + 1;

if (parseInt(guess) === randomNumber ) {

  alert('You guessed the number!');

}  else{

  alert('Sorry. The number was ' + randomNumber);

}





//
// function yourGuess() {
//     guess = document.getElementById("guess").value;
//     guesses = document.getElementById("output");
//
//     if (guess == numToGuess) {
//         guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
//     } else if (guess > numToGuess) {
//         guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
//     } else {
//         guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
//     }
// }
//
// function showNumberToGuess() {
//     if (document.getElementById('cheat').checked) {
//         document.getElementById('numberToGuess').value = numToGuess;
//         document.getElementById('cheatShow').style.display = 'inline';
//     } else {
//         document.getElementById('numberToGuess').value = '';
//         document.getElementById('cheatShow').style.display = 'none';
//     }
// }
//
// var numToGuess = Math.floor(Math.random()*500);
