const array = ['Rock','Paper','Scissors']
let playerChoise, computerChoice, gameResult = ""

function computerTurn() {
    const n = Math.floor(Math.random()* array.length)
    computerChoice = array[n]
}

function playerTurn() {
    playerChoise = document.getElementById('playerChoice').value
    document.getElementById('result').innerHTML = ''
    

}



function game(){
    document.getElementById('result').innerHTML = ''
    playerTurn();
    computerTurn();

    if (playerChoise === computerChoice){
        gameResult = 'draw... try again?'
    } else if (playerChoise === 'Paper' && computerChoice === 'Rock' || playerChoise === 'Rock' && computerChoice === 'Scissors' || playerChoise === 'Scissors' && computerChoice === 'Paper'){
        gameResult = 'You win! GG :)'
    } else if (playerChoise === 'Rock' && computerChoice === 'Paper' || playerChoise === 'Scissors' && computerChoice === 'Rock' || playerChoise === 'Paper' && computerChoice === 'Scissors'){
        gameResult = 'You lose, one more round?'
    }

    document.getElementById('result').innerHTML = `Computer choice ${computerChoice}<br /><strong>${gameResult}</strong>`
}