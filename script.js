let wordsDisplayed  = [];
let wordsComplete = 0;
// in the future maybe grab this from an API (randwords)
let wordList = ['worth', 'even', 'tolerant', 'button', 'orange', 'dance', 'person', 'shout', 'house', 'mosque', 'snarl', 'snub', 'studio', 'destruction', 'island', 'revive', 'time', 'carbon', 'try', 'salon', 'miner', 'misplace', 'current', 'truth', 'guideline', 'conglomerate', 'employ', 'progress', 'tap', 'place', 'crisis', 'pour', 'silver', 'literature', 'seem', 'appeal', 'tray', 'location', 'stretch', 'list', 'differ', 'bag', 'disorder', 'speed', 'relinquish', 'pump', 'peak', 'offer', 'soar', 'register']; 

window.onload = () => {
    document.getElementById('input').addEventListener('keypress', 
    function(e){
        if ((e.key === "Enter") || (e.key === " ")) {
            e.preventDefault(); // avoids adding space into text field
            enteredWord(this.value);
            this.value = ''; 
        }
    });
}

for (let i = 0; i < 1000; i++) { 
    // maybe change to a while loop basically for game state (while its still going on?)
        // still need an incrementer for setTimeout
    // currently the loop basically will add words 1000 times total
    let word = wordList[Math.floor(Math.random()*wordList.length)];

    setTimeout(() => {
        addWord(word);
        slide();
    }, i*1000); // word is added every second, can maybe change in game with user input of difficulty/increase as time passes
    // requires i*1000 so that each element is 1000 APART (first one is delayed 1000, second one 2000 etc.)
    // otherwise it would just give 1000 to all of them and they'd execute together still
}

function enteredWord(word) {
    if (wordsDisplayed.includes(word)) {
        removeWord(word);
        wordsComplete ++;
        document.getElementById('score').innerText = `Words Answered: ${wordsComplete}`;
    }
}

function addWord(word) {
    // if (document.getElementById(word) === null) {
        const board = document.getElementById('board');
        // the below is better than using innerHTML
        let div = document.createElement('div'); 
        div.setAttribute('id', word);
        div.style.position = 'absolute';
        div.style.color = 'white';
        div.style.left = Math.floor(Math.random()*300 + 50) + 'px';
        div.style.top = Math.floor(Math.random()*50 + 50) + 'px';
        board.appendChild(div);
        div.innerText = word;
        wordsDisplayed.push(word);
    // }
}

let interval = setInterval(slide,50 - wordsCompleted); // words slide quicker as the game goes on
function slide() {
    wordsDisplayed.forEach(w => {
        const word = document.getElementById(w);
        let yCoor = parseInt(word.style.top);
        const root = document.querySelector(':root');
        const boardHeight = parseInt(getComputedStyle(root).getPropertyValue('--gameHeight'));
        
        if (yCoor < boardHeight) {
            yCoor ++; // could be fun to change the speed of different words so its not the same 
            word.style.top = yCoor + 'px';
        } else {
            clearInterval(interval);
            removeWord(w);
            alert('Game Over');
            location.reload();
        }
    });
}

function removeWord(word) {
    document.getElementById(word).remove();
    wordsDisplayed = wordsDisplayed.filter((w) => {return w !== word;});
}
