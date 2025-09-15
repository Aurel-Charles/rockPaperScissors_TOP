

function getComputerChoice() {
    let number = (Math.floor(Math.random() * 3) + 1) //formul to get a ramdom number between 0 and "3" 

    if (number === 1) {
        return "rock" 
    }  
    if (number === 2) {
        return "paper"
    }
    if (number === 3) {
        return "scissors"
    }
}







let humanScore = 0
let computerScore = 0


function playGame() {
    
    
    
    // compare and log humanChoice computerChoice  and the result with the function playRound()
    // Game start here




}

////
////
////


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    
    switch (humanChoice) {
        case "rock":
            if (humanChoice === computerChoice) {
                return "It's a tie, play again"
            }
            else if (humanChoice  && computerChoice === "paper" ) {
                return "You lost! Paper wrap the Rock "
            }
            else if (humanChoice  && computerChoice === "scissors" ) {
                return "You win!  Rock brakes Scissors"
            }
            
            break;
    
        case "paper":
            if (humanChoice === computerChoice) {
                return "It's a tie, play again"
            }
            else if (humanChoice && computerChoice === "rock" ) {
                return "You win! Paper wrap the Rock "
            }
            else if (humanChoice && computerChoice === "scissors" ) {
                return "You lost! Scissors cut Paper"
            }
            
            break;
        
        case "scissors":
            if (humanChoice === computerChoice) {
                return "It's a tie, play again"
            }
            else if (humanChoice && computerChoice === "rock" ) {
                return "You lost! Rock brakes Scissors"
            }
            else if (humanChoice && computerChoice === "paper" ) {
                return "You win! Scissors cut paper "
            }
            
            break;
    
        default:
            return "You typed something wrong"
            break;
    }

} 

function updateScore(roundResult) {
    
    
    // increment score based on round result
    
    let win = roundResult.startsWith("You win!") // determine if you win or not
    let tie = roundResult.startsWith("It's a tie")// determine if it's a tie
    
    if (tie) {
    }
    else if (win) {
     humanScore++    
    }
    else {
      computerScore++
    }
    
    let totalScore = "Your score is: " + humanScore + ", Computer score is: " + computerScore
    console.log(totalScore);
    return totalScore
}
    

const scoreBox = document.querySelector('#score')
const roundScore = document.createElement('p')
const score  = document.createElement('p')




const btnRock = document.querySelector('#rock')
btnRock.addEventListener('click', ()=>  {
    const computerSelection = getComputerChoice();
    let roundResult = playRound("rock", computerSelection)
    roundScore.textContent = roundResult
    scoreBox.appendChild(roundScore)
    score.textContent = updateScore(roundResult);
    scoreBox.appendChild(score)


})

const btnPaper = document.querySelector('#paper')
btnPaper.addEventListener('click', ()=> {
    const computerSelection = getComputerChoice();
    let roundResult = playRound("paper", computerSelection)
    roundScore.textContent = roundResult
    scoreBox.appendChild(roundScore)
    score.textContent = updateScore(roundResult);
    scoreBox.appendChild(score)
})

const btnScissors = document.querySelector('#scissors')
btnScissors.addEventListener('click', ()=> {
    const computerSelection = getComputerChoice();
    let roundResult = playRound("scissors", computerSelection)
    roundScore.textContent = roundResult
    scoreBox.appendChild(roundScore)
    score.textContent = updateScore(roundResult);
    scoreBox.appendChild(score)
})



 

