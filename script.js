let choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choice) {
  return choice[Math.floor(Math.random()*choice.length)];
}
console.log(getComputerChoice(choice));



function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
      return `It's a tie! You both picked ${playerSelection}`;
    } else if(playerSelection === "Rock" && computerSelection === "Paper"){
       return "You lose! Paper beats Rock";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors"){
      return "You win ! Rock beats Scissors";
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
      return "You win ! Paper beats Rock";
    } else if(playerSelection === "Paper" && computerSelection === "Scissors"){
      return "You lose ! Scissors beats Paper";
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
      return "You win ! Scissors beats Paper";
    } else if(playerSelection === "Scissors" && computerSelection === "Rock"){
      return "You lose ! Rock beats Scissors";
    }
}
 
const playerSelection = prompt("Choose Your Weapon !");
const computerSelection = getComputerChoice(choice);
console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i = 0; i < 5; i++){
      const playerSelection = prompt("Choose Your Weapon !");
      const computerSelection = getComputerChoice(choice);
      const currentRound = playRound(playerSelection, computerSelection);
      console.log(currentRound);
    }
}

game()