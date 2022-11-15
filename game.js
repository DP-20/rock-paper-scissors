let playerCount = 0;
let computerCount = 0;
const buttons = document.querySelectorAll('button');

//This disables the buttons after a winner is chosem
function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

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
function playRound(playerSelection){
    player = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    computer = computerSelection.toLowerCase();

    document.getElementById('result').innerHTML = decideWinner(player, computer);

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

    winner = (winner + "<br><br>Player Score: " + playerCount + "<br>Computer Score: " + computerCount);
    
    if (playerCount == 5 || computerCount == 5){
        if(playerCount > computerCount){
            winner = "You WON it ALL! Congrats!!! ^o^";
            winner = (winner + "<br><br>Player Score: " + playerCount + "<br>Computer Score: " + computerCount);
            winner += "<br><br>Refresh to play again!";
            disableButtons();
        }
        else if(playerCount < computerCount){
            winner = "The Computer was better this time around...You lost :|";
            winner = (winner + "<br><br>Player Score: " + playerCount + "<br>Computer Score: " + computerCount);
            winner += "<br><br>Refresh to play again!";
            disableButtons();
        }
        else{
            winner = "Its a tie. Looks like youre just as good as your computer is.";
            winner = (winner + "<br><br>Player Score: " + playerCount + "<br>Computer Score: " + computerCount);
            winner += "<br><br>Refresh to play again!";
            disableButtons();
        }
        playerCount = 0;
        computerCount = 0;
    }

    return winner;
}


//Adding event listeners to the new buttons that were created
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        console.log("THE button was pressed!!!");
    });
});
