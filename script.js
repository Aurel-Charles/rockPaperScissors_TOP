
// Dertermined the computer Choice
//transforme a number into. a string choice (1 > rock)
function getRandomChoice() {
    let number = (Math.floor(Math.random() * 3) + 1) //get a ramdom number between 0 and "max" 

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

let getComputerChoice = getRandomChoice() // Create a new function named getComputerChoice with the choice. Game is played against the computer 

console.log("The computer choosed: " + getComputerChoice);

getComputerChoice = getRandomChoice()
console.log("The computer choosed: " + getComputerChoice);


// Dertermined the human Choice
// compare the computer with the human Choice
// show the result