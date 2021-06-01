function computerPlay(){
    let selection=['Rock','Paper','Scissors'];
    return selection[Math.floor(Math.random()*selection.length)];
}

function playRound(playerSelection,computerSelction){
    playerSelection = playerSelection.toLowerCase();
    let playerSelectionU = playerSelection[0];
    playerSelectionU = playerSelectionU.toUpperCase();
    playerSelectionU += playerSelection.slice(1);
    if(playerSelectionU==='Rock' && computerSelction==="Scissors" || playerSelectionU==='Scissors'&&computerSelction==='Paper' || playerSelectionU==='Paper'&&computerSelction==='Rock'){
        return "Player";
    }
    else if(playerSelectionU==='Scissors' && computerSelction==="Rock" || playerSelectionU==='Paper'&&computerSelction==='Scissors' || playerSelectionU==='Rock'&&computerSelction==='Paper')
        return "Computer";
    else return "Draw";
}

// const playerSelection = "rock";
// const computerSelction = computerPlay();
// console.log(playRound(playerSelection,computerSelction));

function game(e){
    let currentScore = document.createElement('p');
    currentScore.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins}`;
    division.appendChild(currentScore);
    
    if(playerWins===5 || computerWins===5){
        const result = document.createElement('h2');
        result.textContent =   playerWins===5 ? "You Won!! Hurray!" : "Computer Won! Better luck next time.";
        division.appendChild(result);
        playerWins=0;
        computerWins=0;
    }
    const playerSelection = e.target.textContent;
    const computerSelection = computerPlay();
    let winner= playRound(playerSelection,computerSelection) ;
    if(winner==='Player') playerWins++;
    else if(winner==='Computer') computerWins++;
}
var playerWins=0,computerWins=0;
const division = document.querySelector('div');
const buttons = [...document.querySelectorAll('button')];
buttons.forEach(button => button.addEventListener('click',game));