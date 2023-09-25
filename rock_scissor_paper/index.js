const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById('results');
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

// getting all the buttons using foreach
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        // console.log('user choice', button.id, 'computer choice', compuInput())
       const result = playGame(button.id, compuInput());
    //    console.log(result)
        // getting the results
        resultEl.textContent = result;
    })
})

// getting computer input
function compuInput(){
    // selecting from the array of rock, paper, scissors
    const gameArray = ['rock', 'paper', 'scissors'];
    const someRandomNums = Math.floor(Math.random()*gameArray.length);
    return gameArray[someRandomNums];
}

function playGame(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You've Won! " + playerSelection + " beats " + computerSelection;
    }else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose! "  + computerSelection + " beats " + playerSelection;
    }
        
    
}