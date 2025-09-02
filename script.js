// Dertermined the computer Choice
    // function to generate 3 random number (1 2 3)
    // function that make each number equal to a choice (1 = rock ; 2 = paper ; 3 = scisoors)
    //put the value inside a variable
// Dertermined the human Choice
// compare the computer with the human Choice
// show the result



// Create a new function named getComputerChoice. Game is played against the computer 

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);  //get a ramdom number between 0 and "max" 
}

//transforme a number into. a string choice (1 > rock)
function getRandomChoice(number) {
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




let getComputerChoice

getComputerChoice = getRandomNumber(3) + 1

console.log(getComputerChoice);

console.log(getRandomChoice(3));


//console.log(getRandomNumber(3));
// Expected output: 0, 1 or 2