let wordsDisplayed  = new Set([]);
let wordsComplete = 0;
// in the future maybe grab this from an API (randwords)
let wordList = ['worth', 'even', 'tolerant', 'button', 'orange', 'dance', 'person', 'shout', 'house', 'mosque', 'snarl', 'snub', 'studio', 'destruction', 'island', 'revive', 'time', 'carbon', 'try', 'salon', 'miner', 'misplace', 'current', 'truth', 'guideline', 'conglomerate', 'employ', 'progress', 'tap', 'place', 'crisis', 'pour', 'silver', 'literature', 'seem', 'appeal', 'tray', 'location', 'stretch', 'list', 'differ', 'bag', 'disorder', 'speed', 'relinquish', 'pump', 'peak', 'offer', 'soar', 'register']; 

window.onload = function(){
    document.getElementById('input').addEventListener('keypress', 
    function(e){
        if (e.key === "Enter") {
            //e.preventDefault();
            enteredWord(this.value);
            console.log(this.value + ' was entered');
            this.value = ''; 
        }
    });
}

for (let i = 0; i < 1000; i++) {
    let word;
    do {
        wordList[Math.floor(Math.random()*wordList.length)];
    } while (wordsDisplayed.has(word)); // avoid duplicate values bc dealing with sets

    setTimeout(function timer(){
        addWord(word);
        slide();
    }, i*1000); // do it every second, can maybe change in game
}
let interval = setInterval(slide(),30);

function enteredWord(word) {
    if (wordsDisplayed.has(word)) {
        console.log(this.value + ' was entered CORRECTLY');
        removeWord(word);
        wordsComplete ++;
        document.getElementById('score').innerText = wordsComplete;
    }
}

function addWord(word) {
    let board = document.getElementById('board');
    // the below is better than using innerHTML
    let div = document.createElement('div'); 
    div.setAttribute('id', word);
    div.style.position = 'absolute';
    div.style.color = 'white';
    div.style.left = Math.floor(Math.random()*300 + 50) + 'px';
    div.style.top = Math.floor(Math.random()*50 + 50) + 'px';
    board.appendChild(div);
    div.innerText = word;
    wordsDisplayed.add(word);
}

function slide() {
    wordsDisplayed.forEach(function(w) {
        let word = document.getElementById(w);
        console.log(word.style.top);
        let yCoor = parseInt(word.style.top);
        // let root = document.querySelector(':root');
        if (yCoor < 500) {
            //  getComputedStyle(root).getPropertyValue('--gameHeight')
            yCoor ++;
            word.style.top = yCoor + 'px';
            console.log(w + '     ' + yCoor + '    ' + word.style.top);
        } else {
            clearInterval(interval);
            removeWord(w);
            alert('Game Over');
            location.reload();
        }
    });
}

function removeWord(w) {
    document.getElementById(w).remove(); //not the same as demo, hope this works, not sure though
    wordsDisplayed.delete(word);
}



