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
  let choice = prompt("Enter: Rock, Paper or Scissors", "Rock");
  return choice.toLowerCase();
}

// round logic

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanSelection == computerChoice) {
      console.log(`Draw: ${humanChoice} = ${computerChoice}`);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`);
      return ++computerScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`);
      return ++computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`);
      return ++computerScore;
    } else {
      console.log(`You win: ${humanChoice} beats ${computerChoice}`);
      return ++humanScore;
    }
  }
  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
  console.log(`You win ${humanScore} : ${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`You lose ${computerScore} : ${humanScore}`);
} else {
  console.log(`Draw ${humanScore} : ${computerScore}`);
}
