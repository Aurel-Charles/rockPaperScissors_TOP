

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




function getHumanChoice() {
    let Choice =  window.prompt("Rock? Paper? or Scissors?")
    return Choice   
} 






let humanScore = 0
let computerScore = 0


function playGame() {
    
    
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
    
    
    // compare and log humanChoice computerChoice  and the result with the function playRound()
    
    const humanSelection = getHumanChoice();
    console.log("You chosed: " + humanSelection);
    
    const computerSelection = getComputerChoice();
    console.log("The computer chosed: " +  computerSelection);
    
    
    let roundResult = playRound(humanSelection, computerSelection)
    console.log("Result: " + roundResult);
    
    
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

}


playGame()
playGame()
playGame()
playGame()
playGame()