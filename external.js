

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
        result = `player wins`;
      } 
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissor') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissor' && playerSelection == 'paper')
    ) {
        result = `Computer wins`;
      }
    else {
        result = 'please enter a valid input'
    }
console.log(result)
return result;
}

function game() {
    let computerCount = 0;
    let humanCount = 0;
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice(computerChoice);
        let round = playRound(prompt("Make your selection").toLowerCase(),computer)
        if(round == `Computer wins`) {
            computerCount++
        }
        else if(round == `player wins`){
            humanCount++
        }
        

        
    }
    if(humanCount > computerCount){
        console.log(`You beat the computer with a score of ${humanCount} to ${computerCount}`)
    }
    else if(computerCount > humanCount){
        console.log(`The computer wins with a score of ${computerCount} to ${humanCount}`)
    }
    else{
        console.log('The game ends in a tie')
    }
}





let initiateGame = game()

// with ${computerSelection} against player's ${playerSelection}
// with ${playerSelection} against computer's ${computerSelection}
