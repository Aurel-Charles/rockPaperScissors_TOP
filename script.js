
// Dertermined the computer Choice

function getComputerChoice() {
    let number = (Math.floor(Math.random() * 3) + 1) //get a ramdom number between 0 and "max" 

    if (number === 1) {
        return "rock" //transforme a number into. a string choice (1 > rock)
    }  
    if (number === 2) {
        return "paper"
    }
    if (number === 3) {
        return "scissors"
    }
}


console.log("The computer choosed: " + getComputerChoice());



// Dertermined the human Choice

function getHumanChoice() {
    let askChoice =  window.prompt("Rock? Paper? or Scissors?") 
    console.log("You chosed: " +  askChoice);
    
} 

getHumanChoice()

// compare the computer with the human Choice

let humanScore = 0
let computerScore = 0

// show the result