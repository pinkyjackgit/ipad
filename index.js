let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

// computer & human choice

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return options[0];
  } else if (choice == 1) {
    return options[1];
  } else if (choice == 2) {
    return options[2];
  }
}

function getHumanChoice() {
  return prompt("Enter: Rock, Paper or Scissors", "Rock");
}

// round logic
