//Variable for the alphabet
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Variables for tracking score
var totalWins = 0;
var totalLosses = 0;
const maxGuesses = 10;
var remainingGuesses = maxGuesses;
var wrongGuess = [];

//Variables that reference places in HTML where to display things
var totalWinsText = document.getElementById("totalWins-text");
var totalLossesText = document.getElementById("totalLosses-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var remainingGuessesText = document.getElementById("remainingGuesses-text");
var computerGuessText = document.getElementById("computerGuess-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  // How do you only pick alpha letters and no other inputs??
  // How do you prevent double couting of letters?
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  // How do you pick a random letter and keep it until the user guesses??
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

  if (userGuess === computerGuess) {
    totalWins++;
    alert("You win");
    wrongGuess = [];
    remainingGuesses = maxGuesses;
  } else if (remainingGuesses <= 0) {
    totalLosses++;
    alert("You lose");
    wrongGuess = [];
    remainingGuesses = maxGuesses;
  } else {
    remainingGuesses--;
    wrongGuess.push(userGuess);
  }

  guessedLettersText.textContent = "Guessed letters: " + wrongGuess;

  totalWinsText.textContent = "Wins: " + totalWins;
  totalLossesText.textContent = "Losses: " + totalLosses;
  remainingGuessesText.textContent = "Remaining guesses: " + remainingGuesses;
};
