/*

const newButton = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){

    const newListItem = document.createElement('li');
    const newListItemText = 'Item 5';
    newListItem.append(newListItemText);
    newListItem.className = 'list-group-item';
    const listGroupItem = document.querySelector('.list-group');
    const listGroup = document.querySelector('.list-group-item:nth-of-type(5)');
    listGroupItem.insertBefore(newListItem, listGroup);

});

const newButton2 = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){
    const newListItem2 = document.createElement('li');
    const newListItemText2 = document.createTextNode('Item 6');
    newListItem2.append(newListItemText2);
    newListItem2.className = 'list-group-item';
    const listGroupItem2 = document.querySelector('.list-group');
    const listGroup2 = document.querySelector('.list-group-item:nth-of-type(6)');
    listGroupItem2.insertBefore(newListItem2, listGroup2);
    document.querySelector('.title2').style.color = 'red';
})

const newButton3 = document.getElementsByClassName('add-item')[0].addEventListener('click', function() {
    const newListItem3 = document.createElement('li');
    const newListItemText3 = document.createTextNode('Item 7');
    newListItem3.append(newListItemText3);
    newListItem3.className = 'list-group-item';
    const listGroupItem3 = document.querySelector('.list-group');
    const listGroup3 = document.querySelector('.list-group-item:nth-of-type(7)');
    listGroupItem3.insertBefore(newListItem3, listGroup3);
})

const newButton4 = document.getElementsByClassName('add-item')[0].addEventListener('click', function() {
    const newListItem4 = document.createElement('li');
    const newListItemText4 = document.createTextNode('Item 4');
    newListItem4.append(newListItemText4);
})

const newButton5 = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){

})

const newButton6 = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){

})

const newButton6 = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){

})
const newButton7 = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){

})

const newButton8 = document.getElementsByClassName('add-item')[0].addEventListener('click', function(){

})
*/

//Computer player functionality

let wins = 0;

//Show player score
const newScore = document.createElement('p');
const newScoreWins = wins;
const newScoreText = 'Score: ';
newScore.append(newScoreText);
newScore.append(newScoreWins);
newScore.className = 'new-score';
newScore.style.color = 'white';
newScore.style.display = 'flex';
newScore.style.justifyContent = 'center';
newScore.style.marginBottom = '25px';
const scoreContainer = document.getElementsByClassName('play-container')[0];
const selections = document.getElementsByClassName('selections')[0];
scoreContainer.insertBefore(newScore, selections);

const computerPlay = () => {

    const randomGen = ['rock', 'paper', 'scissors'];
    const compSelection = Math.floor(Math.random() * randomGen.length);
    return randomGen[compSelection];
}

//Show oppoonent selection
let oppSelection = (choice) => {

    const displayCpu = document.createElement('p');
    const displayCpuText = document.createTextNode('Opponent chooses: ' + choice);
    displayCpu.append(displayCpuText);
    displayCpu.style.color = 'white';
    displayCpu.style.display = 'flex';
    displayCpu.style.justifyContent = 'center';
    displayCpu.style.alignItems = 'center';
    displayCpu.style.height = '472px';
    const sepLine = document.getElementsByClassName('sep-line')[0];
    const playContainer = document.getElementsByClassName('play-container')[0];
    playContainer.insertBefore(displayCpu, sepLine);

}

const cpuChoice = document.getElementsByClassName('cpu-choice')[0];
cpuChoice.style.color = 'white';
cpuChoice.style.display = 'flex';
cpuChoice.style.height = '225px';
cpuChoice.style.justifyContent = 'center';
cpuChoice.style.alignItems = 'center';

const humanChoice = document.getElementsByClassName('human-choice')[0];
humanChoice.style.color = 'white';
humanChoice.style.display = 'flex';
humanChoice.style.height = '225px';
humanChoice.style.justifyContent = 'center';
humanChoice.style.alignItems = 'center';

const gameResult = document.getElementsByClassName('game-result')[0];
gameResult.style.color = 'white';
gameResult.style.display = 'flex';
gameResult.style.justifyContent = 'center';
gameResult.style.alignItems = 'center';
gameResult.style.paddingTop = '20px';

//Human player functionality

const rock = () => {

    humanChoice.innerHTML = 'You choose: Rock';
    console.log('rock');
    const selection1 = 'rock';
    return selection1;
}

const paper = () => {
    humanChoice.innerHTML = 'You choose: Paper';
    console.log('paper');
    const selection2 = 'paper';
    return selection2;
}

const scissors = () => {
    humanChoice.innerHTML = 'You choose: Scissors';
    console.log('scissors');
    const selection3 = 'scissors';
    return selection3;
}

const rockButton = document.getElementsByClassName('rock')[0].addEventListener('click', function(){
    if (rock() === computerPlay()) {
        cpuChoice.innerHTML = 'Computer chose: Rock';
        gameResult.innerHTML = 'Last Game Result: Draw!';
        console.log('Draw!');
    } else if (rock() !== computerPlay() && computerPlay() === 'paper') {
        cpuChoice.innerHTML = 'Computer chose: Paper';
        gameResult.innerHTML = 'Last Game Result: Lose!';
        console.log('Computer chose Paper, you lose!');
    } else {
        let scoreUpdate = () => {
            cpuChoice.innerHTML = 'Computer chose: Scissors';
            gameResult.innerHTML = 'Last Game Result: Win!';
            newScore.innerText = 'Score: ' + wins;
        }
        wins++;
        scoreUpdate();
        console.log(wins)
    }
});

const paperButton = document.getElementsByClassName('paper')[0].addEventListener('click', function(){
    computerPlay();
    if (paper() === computerPlay()) {
        cpuChoice.innerHTML = 'Computer chose: Paper';
        gameResult.innerHTML = 'Last Game Result: Draw!';
        console.log('Draw!');
    } else if (paper() !== computerPlay() && computerPlay() === 'scissors') {
        cpuChoice.innerHTML = 'Computer chose: Scissors';
        gameResult.innerHTML = 'Last Game Result: Lose!';
        console.log('Computer chose Scissors, you lose!');
    } else {
        let scoreUpdate = () => {
            cpuChoice.innerHTML = 'Computer chose: Rock';
            gameResult.innerHTML = 'Last Game Result: Win!';
            newScore.innerText = 'Score: ' + wins;
    }
    wins++;
    scoreUpdate();
    console.log(wins);
    }
});

const scissorsButton = document.getElementsByClassName('scissors')[0].addEventListener('click', function(){
    computerPlay();
    if (scissors() === computerPlay()) {
        cpuChoice.innerHTML = 'Computer chose: Scissors';
        gameResult.innerHTML = 'Last Game Result: Draw!';
        console.log('Draw!');
    } else if (scissors() !== computerPlay && computerPlay() === 'rock') {
        cpuChoice.innerHTML = 'Computer chose: Rock';
        gameResult.innerHTML = 'Last Game Result: Lose!';
        console.log('Computer chose rock, you lose!');
    } else {
        let scoreUpdate = () => {
            cpuChoice.innerHTML = 'Computer chose: Paper';
            gameResult.innerHTML = 'Last Game Result: Win!';
            newScore.innerText = 'Score: ' + wins;
    }
    wins++;
    scoreUpdate();
    console.log(wins);
    }
});