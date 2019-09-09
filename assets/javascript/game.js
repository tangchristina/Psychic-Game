//Creates an array that lists out all the options

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creates a variable that holds the number of wins and losses which start at 0. The player has 9 lives and an array is created that lists out all the guesses the player can have.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = "";
var yourGuesses = [];

//Creates variables that reference the html file
var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessText = document.getElementById("userguess-text");

// This function is run whenever the user presses a key.


document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;
yourGuesses.push(userGuess);

// Computer randomly uses a letter from the options array


// The score increments the appropriate amount based on the user guess and computer choice.
if (guessesLeft === 0) {
    
    wins === 0;
    losses === 0;
    guessesLeft === 9;
}  

else if (userGuess === computerChoice) {
    wins++;
} 

else {    
    losses++;
    guessesLeft--;
}

      


// Displays the wins, losses, guesses left, and user guesses        
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
userGuessText.textContent = "Your Guesses so far: " + yourGuesses;
}