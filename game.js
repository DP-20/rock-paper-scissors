let playerCount = 0;
let computerCount = 0;


/*This function is meant to get a random choice between rock paper and scissors*/
function getComputerChoice(){
    var num = Math.floor(Math.random() * 13);
    let choice;
    if (num <= 4){
        choice =  'Rock';
    }
    else if(num > 4 && num <= 8){
        choice = 'Paper';
    }
    else {
        choice = 'Scissor';
    }
    return choice;
}

/*This function is used to play a game of rock, paper, scissors
 * it takes in a user input and compares it to the computers choice 
**/
function playRound(playerSelection, computerSelection){
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    result = decideWinner(player, computer);

    return result;
}



/* This is a helper function that is used to decide the winner for Rock, Paper, Scissor
 * It takes in the user input and compter input and compares the two choices
 * Returns a message depending on who won or if it was a tie
 */
function decideWinner(playerChoice, computerChoice){
    mainChoice = playerChoice;
    let winner = "It's a tie!";
    switch (mainChoice){
        case 'paper':
            if(computerChoice == 'rock'){
                winner =  "You win! Paper beats Rock!";
                playerCount++;
            }
            if(computerChoice == 'scissor'){
                winner =  "You lost :(, Scissor beats Paper";
                computerCount++;
            }
            break;
        case 'rock':
            if(computerChoice == 'scissor'){
                winner =  "You win! Rock beats Scissor";
                playerCount++;
            }
            if(computerChoice == 'paper'){
                winner =  "You lose :( , Paper beats Rock";
                computerCount++;
            }
            break;
        case 'scissor':
            if(computerChoice == 'paper'){
                winner =  "You win!. Scissor beats Paper";
                playerCount++;
            }
            if(computerChoice == 'rock'){
                winner =  "You lose :( , Rock beats Scissor";
                computerCount++;
            }
            break;
        default:
            winner =  "Its a Tie!";
    }

    return winner;
}


/*This function is used to play a game of rock paper scissors for 5 rounds
 * The winner is the person who has the most points at the end of the game!
 */
function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Choose: Rock, Paper, or Scissor?");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        console.log("The current score is: Player: " + playerCount + " " + "Computer: " + computerCount);
    }

    if(playerCount > computerCount){
        console.log("You WON it ALL! Congrats!!! ^o^");
    }
    else if(playerCount < computerCount){
        console.log("The Computer was better this time around...You lost :|");
    }
    else{
        console.log("Its a tie. Looks like youre just as good as your computer is. ");
    }
    playerCount = 0;
    computerCount = 0;
}
