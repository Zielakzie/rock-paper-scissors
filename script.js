const array = ['Rock', 'Paper', 'Scissors']
let playerChoise = ""
let computerChoice = ""
let gameResult = ""
const result = document.getElementById('result')
const score = document.getElementById('score')



function computerTurn() {
    const n = Math.floor(Math.random() * array.length)
    computerChoice = array[n]
}

function playerTurn() {
    playerChoise = document.getElementById('playerChoice').value
    result.innerHTML = ''
}

let computerPoints = 0;
let playerPoints = 0;

function game() {

    result.innerHTML = ''
    gameResult.innerHTML = ''

    playerTurn();
    computerTurn();


    setTimeout(function () {



        if (playerChoise === computerChoice) {
            gameResult = 'Draw'
            score.innerHTML = `Player: ${playerPoints} Computer: ${computerPoints}`

        } else if (playerChoise === 'Paper' && computerChoice === 'Rock' || playerChoise === 'Rock' && computerChoice === 'Scissors' || playerChoise === 'Scissors' && computerChoice === 'Paper') {
            playerPoints++;
            gameResult = 'Point for Player'
            score.innerHTML = `Player: ${playerPoints} Computer: ${computerPoints}`
            if (playerPoints === 3) {
                gameResult = 'Player Won GG! :)'
                playerPoints = 0
                computerPoints = 0
            }

        } else if (playerChoise === 'Rock' && computerChoice === 'Paper' || playerChoise === 'Scissors' && computerChoice === 'Rock' || playerChoise === 'Paper' && computerChoice === 'Scissors') {
            computerPoints++;
            gameResult = 'Point for Computer'
            score.innerHTML = `Player: ${playerPoints} Computer: ${computerPoints}`

            if (computerPoints === 3) {
                gameResult = 'You lose, one more Try?'
                playerPoints = 0
                computerPoints = 0
            }

        } else {
            gameResult = "It seems like you are trying to cheat ;) Chose your weapon!"
        }

        result.innerHTML = `Computer choice ${computerChoice}<br /><strong>${gameResult}</strong><br />`;
    }
        , 100);
}