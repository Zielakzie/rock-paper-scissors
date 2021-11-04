const array = ['rock', 'paper', 'scissors']
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

function clearPoints() {
    playerPoints = 0
    computerPoints = 0
    scoreBoardPlayerPoints.innerHTML = `${playerPoints}`
    scoreBoardComputerPoints.innerHTML = `${computerPoints}`


}

function game() {
    document.getElementById("welcome").style = 'display: none;'
    document.getElementById("score-board").style = 'display: flex;'
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
            gameResult = 'Computer scored a point'
            scoreBoardComputerPoints.innerHTML = `${computerPoints}`

            if (computerPoints === 3) {
                gameResult = `<span class="red">You lost</span><br /> with ${computerPoints} : ${playerPoints}<br /> one more Try?`
                clearPoints()

            }

        } else {
            gameResult = "It seems like you are trying to cheat ;) Choose your weapon!"
        }

        result.innerHTML = `Computer chose ${computerChoice}<br /><strong>${gameResult}</strong><br />`;
    }
        , 100);
}