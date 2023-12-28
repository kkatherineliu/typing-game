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
    // currently the loop basically will add words 1000 times total
    let word;
    do {
        word = wordList[Math.floor(Math.random()*wordList.length)];
    } while (wordsDisplayed.includes(word)); // avoid duplicate values bc dealing with sets
    // basically rn two of the same word will show up on the screen and then typing only deletes one of them hmm

    setTimeout(() => {
        addWord(word);
        slide();
    }, i*1000); // word is added every second, can maybe change in game with user input of difficulty/increase as time passes
    // requires i*1000 so that each element is 1000 APART (first one is delayed 1000, second one 2000 etc.)
    // otherwise it would just give 1000 to all of them and they'd execute together still
    // only thing is i don't understand how the slide part works, going wayy too slow
    
}

function enteredWord(word) {
    if (wordsDisplayed.includes(word)) {
        removeWord(word);
        wordsComplete ++;
        document.getElementById('score').innerText = `Words Answered: ${wordsComplete}`;
    }
}

function addWord(word) {
    if (document.getElementById(word) === null) { // extra security to prevent duplicates
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
        wordsDisplayed.push(word);
    }
}

let interval = setInterval(slide(),30); //idt this is doing anything rn
function slide() {
    wordsDisplayed.forEach(w => {
        let word = document.getElementById(w);
        let yCoor = parseInt(word.style.top);
        // let root = document.querySelector(':root');
        if (yCoor < 500) {
            // getComputedStyle(root).getPropertyValue('--gameHeight')
            yCoor ++;
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
    document.getElementById(word).remove(); //not the same as demo, hope this works, not sure though
    wordsDisplayed = wordsDisplayed.filter((w) => {return w !== word;});
}



