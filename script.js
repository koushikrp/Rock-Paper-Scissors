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
        return "You Won! "+playerSelectionU+" beats "+computerSelction;
    }
    else if(playerSelectionU==='Scissors' && computerSelction==="Rock" || playerSelectionU==='Paper'&&computerSelction==='Scissors' || playerSelectionU==='Rock'&&computerSelction==='Paper')
        return "You Lose! "+computerSelction+" beats "+playerSelectionU;
    else return "It's a Draw! "+playerSelectionU+" versus "+computerSelction+" results in a Draw.";
}

// const playerSelection = "rock";
// const computerSelction = computerPlay();
// console.log(playRound(playerSelection,computerSelction));

function game(){
    for(let i=0;i<5;i++){
        const playerSelection = prompt('Enter Your Selection: ');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}
game();