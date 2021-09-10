const array = ['Rock', 'Paper', 'Scissors']
let playerChoise, computerChoice, gameResult = ""
const result = document.getElementById('result')

function computerTurn() {
    const n = Math.floor(Math.random() * array.length)
    computerChoice = array[n]
}

function playerTurn() {
    playerChoise = document.getElementById('playerChoice').value
    result.innerHTML = ''
}



function game() {
    result.innerHTML = ''
    playerTurn();
    computerTurn();

    setTimeout(function () {
        if (playerChoise === computerChoice) {
            gameResult = 'draw... try again?'
        } else if (playerChoise === 'Paper' && computerChoice === 'Rock' || playerChoise === 'Rock' && computerChoice === 'Scissors' || playerChoise === 'Scissors' && computerChoice === 'Paper') {
            gameResult = 'You win! GG :)'
        } else if (playerChoise === 'Rock' && computerChoice === 'Paper' || playerChoise === 'Scissors' && computerChoice === 'Rock' || playerChoise === 'Paper' && computerChoice === 'Scissors') {
            gameResult = 'You lose, one more round?'
        } else {
            gameResult = "It seems like you are trying to cheat ;) Chose your weapon!"
        }

        result.innerHTML = `Computer choice ${computerChoice}<br /><strong>${gameResult}</strong>`
    }, 100);


}