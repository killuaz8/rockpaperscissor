

const computerChoice = ['rock','paper','scissor']
function getComputerChoice(choice) {

    let randomValue = choice[Math.floor(Math.random() * choice.length)];
    return randomValue;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    let result;
    if (playerSelection === computerSelection) {
        result = 'it was a tie'

    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissor') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')
    ) {
        result = `player wins with ${playerSelection} against computer's ${computerSelection}`;
      } 
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissor') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissor' && playerSelection == 'paper')
    ) {
        result = `Computer wins with ${computerSelection} against player's ${playerSelection}`;
      }
    else {
        result = 'please enter a valid input'
    }
console.log(result)
return result;
}

let computer = getComputerChoice(computerChoice);

playRound(prompt("Make your selection").toLowerCase(),computer);