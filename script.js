const array = ['Rock', 'Paper', 'Scissors']
let playerChoise = ""
let computerChoice = ""
let gameResult = ""
const result = document.getElementById('result')
const score = document.getElementById('score')
const scoreBoardPlayerPoints = document.getElementById('player-points')
const scoreBoardComputerPoints = document.getElementById('computer-points')




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

// FIXME:
function clearPoints() {
    playerPoints = 0
    computerPoints = 0
    scoreBoardPlayerPoints.innerHTML = `${playerPoints}`
    scoreBoardComputerPoints.innerHTML = `${computerPoints}`


}

function game() {

    result.innerHTML = ''
    gameResult.innerHTML = ''

    playerTurn();
    computerTurn();


    setTimeout(function () {


        if (playerChoise === computerChoice) {
            gameResult = 'Draw'

        } else if (playerChoise === 'Paper' && computerChoice === 'Rock' || playerChoise === 'Rock' && computerChoice === 'Scissors' || playerChoise === 'Scissors' && computerChoice === 'Paper') {
            playerPoints++;
            gameResult = 'Point for Player'
            scoreBoardPlayerPoints.innerHTML = `${playerPoints}`
            if (playerPoints === 3) {
                gameResult = `<span class="green">Player Won GG! :)</span><br /> with ${playerPoints} : ${computerPoints}`
                clearPoints()

            }

        } else if (playerChoise === 'Rock' && computerChoice === 'Paper' || playerChoise === 'Scissors' && computerChoice === 'Rock' || playerChoise === 'Paper' && computerChoice === 'Scissors') {
            computerPoints++;
            gameResult = 'Point for Computer'
            scoreBoardComputerPoints.innerHTML = `${computerPoints}`

            if (computerPoints === 3) {
                gameResult = `<span class="red">You lose</span>, one more Try?<br /> with ${computerPoints} : ${playerPoints}`
                clearPoints()

            }

        } else {
            gameResult = "It seems like you are trying to cheat ;) Chose your weapon!"
        }

        result.innerHTML = `Computer choice ${computerChoice}<br /><strong>${gameResult}</strong><br />`;
    }
        , 100);
}