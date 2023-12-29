let wordsDisplayed  = [];
let wordsComplete = 0;
let speed = 30; 
let timeDelay = 1000; // time between each word's generation
let wordList = ['worth', 'even', 'tolerant', 'button', 'orange', 'dance', 'person', 'shout', 'house', 'mosque', 'snarl', 'snub', 'studio', 'destruction', 'island', 'revive', 'time', 'carbon', 'try', 'salon', 'miner', 'misplace', 'current', 'truth', 'guideline', 'conglomerate', 'employ', 'progress', 'tap', 'place', 'crisis', 'pour', 'silver', 'literature', 'seem', 'appeal', 'tray', 'location', 'stretch', 'list', 'differ', 'bag', 'disorder', 'speed', 'relinquish', 'pump', 'peak', 'offer', 'soar', 'register']; 

const board = document.getElementById('board');
let boardHeight = 0.8*visualViewport.height;
let boardWidth = 0.75*visualViewport.width;

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
    setTimeout(addWord, i*timeDelay); // word is added every second by default
}

let interval = setInterval(slide, speed); // slide the words down

function enteredWord(word) {
    if (wordsDisplayed.includes(word)) {
        if (Math.floor(Math.random()* 3) === 1) {addWord();}

        // update game state
        removeWord(word);
        wordsComplete ++;
        document.getElementById('score').innerText = `Score: ${wordsComplete}`;

        // increase the speed of words sliding down
        speed -= 0.4;
        clearInterval(interval);
        interval = setInterval(slide,speed);
    } else {
        document.getElementById('input').classList.toggle('spellcheck'); 

        setTimeout( () => {document.getElementById('input').classList.toggle('spellcheck')}, 300); 
    }
}

function addWord() {
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    if (document.getElementById(word) === null) {
        let div = document.createElement('div'); 
        div.setAttribute('id', word);
        div.style.position = 'absolute';
        div.style.color = 'white';
        div.style.left = Math.floor(Math.random()*(boardWidth-100) + 30) + 'px';
        div.style.top = Math.floor(Math.random()*-20) + 'px';
        board.appendChild(div);
        div.innerText = word;
        wordsDisplayed.push(word);
    }
}

function slide() {
    wordsDisplayed.forEach(w => {
        const word = document.getElementById(w);
        let yCoor = parseInt(word.style.top);
        
        if (yCoor < boardHeight) {
            yCoor ++; 
            word.style.top = yCoor + 'px';
            if (yCoor > (boardHeight - 100)) {
                word.style.color = 'red';
            } 
        } else {
            clearInterval(interval);
            removeWord(w);
            alert(`Game Over \n${wordsComplete} words answered`);
            location.reload();
        }
    });
}

function removeWord(word) {
    document.getElementById(word).remove();
    wordsDisplayed = wordsDisplayed.filter((w) => {return w !== word;});
}