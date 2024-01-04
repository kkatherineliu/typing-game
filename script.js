let wordsDisplayed  = [];
let wordsComplete = 0;

let speed = 30; 
let timeDelay = 1000; // time between each word's generation
// top 1000 most common English words (minus 2)
let wordList = ['ability','able','about','above','accept','according','account','across','act','action','activity','actually','add','address','administration','admit','adult','affect','after','again','against','age','agency','agent','ago','agree','agreement','ahead','air','all','allow','almost','alone','along','already','also','although','always','American','among','amount','analysis','and','animal','another','answer','any','anyone','anything','appear','apply','approach','area','argue','arm','around','arrive','art','article','artist','as','ask','assume','at','attack','attention','attorney','audience','author','authority','available','avoid','away','baby','back','bad','bag','ball','bank','bar','base','be','beat','beautiful','because','become','bed','before','begin','behavior','behind','believe','benefit','best','better','between','beyond','big','bill','billion','bit','black','blood','blue','board','body','book','born','both','box','boy','break','bring','brother','budget','build','building','business','but','buy','by','call','camera','campaign','can','cancer','candidate','capital','car','card','care','career','carry','case','catch','cause','cell','center','central','century','certain','certainly','chair','challenge','chance','change','character','charge','check','child','choice','choose','church','citizen','city','civil','claim','class','clear','clearly','close','coach','cold','collection','college','color','come','commercial','common','community','company','compare','computer','concern','condition','conference','Congress','consider','consumer','contain','continue','control','cost','could','country','couple','course','court','cover','create','crime','cultural','culture','cup','current','customer','cut','dark','data','daughter','day','dead','deal','death','debate','decade','decide','decision','deep','defense','degree','Democrat','democratic','describe','design','despite','detail','determine','develop','development','die','difference','different','difficult','dinner','direction','director','discover','discuss','discussion','disease','do','doctor','dog','door','down','draw','dream','drive','drop','drug','during','each','early','east','easy','eat','economic','economy','edge','education','effect','effort','eight','either','election','else','employee','end','energy','enjoy','enough','enter','entire','environment','environmental','especially','establish','even','evening','event','ever','every','everybody','everyone','everything','evidence','exactly','example','executive','exist','expect','experience','expert','explain','eye','face','fact','factor','fail','fall','family','far','fast','father','fear','federal','feel','feeling','few','field','fight','figure','fill','film','final','finally','financial','find','fine','finger','finish','fire','firm','first','fish','five','floor','fly','focus','follow','food','foot','for','force','foreign','forget','form','former','forward','four','free','friend','from','front','full','fund','future','game','garden','gas','general','generation','get','girl','give','glass','go','goal','good','government','great','green','ground','group','grow','growth','guess','gun','guy','hair','half','hand','hang','happen','happy','hard','have','he','head','health','hear','heart','heat','heavy','help','her','here','herself','high','him','himself','his','history','hit','hold','home','hope','hospital','hot','hotel','hour','house','how','however','huge','human','hundred','husband','I','idea','identify','if','image','imagine','impact','important','improve','in','include','including','increase','indeed','indicate','individual','industry','information','inside','instead','institution','interest','interesting','international','interview','into','investment','involve','issue','it','item','its','itself','job','join','just','keep','key','kid','kill','kind','kitchen','know','knowledge','land','language','large','last','late','later','laugh','law','lawyer','lay','lead','leader','learn','least','leave','left','leg','legal','less','let','letter','level','lie','life','light','like','likely','line','list','listen','little','live','local','long','look','lose','loss','lot','love','low','machine','magazine','main','maintain','major','majority','make','man','manage','management','manager','many','market','marriage','material','matter','may','maybe','me','mean','measure','media','medical','meet','meeting','member','memory','mention','message','method','middle','might','military','million','mind','minute','miss','mission','model','modern','moment','money','month','more','morning','most','mother','mouth','move','movement','movie','Mr','Mrs','much','music','must','my','myself','name','nation','national','natural','nature','near','nearly','necessary','need','network','never','new','news','newspaper','next','nice','night','no','none','nor','north','not','note','nothing','notice','now','number','occur','of','off','offer','office','officer','official','often','oh','oil','ok','old','on','once','one','only','onto','open','operation','opportunity','option','or','order','organization','other','others','our','out','outside','over','own','owner','page','pain','painting','paper','parent','part','participant','particular','particularly','partner','party','pass','past','patient','pattern','pay','peace','people','per','perform','performance','perhaps','period','person','personal','phone','physical','pick','picture','piece','place','plan','plant','play','player','PM','point','police','policy','political','politics','poor','popular','population','position','positive','possible','power','practice','prepare','present','president','pressure','pretty','prevent','price','private','probably','problem','process','produce','product','production','professional','professor','program','project','property','protect','prove','provide','public','pull','purpose','push','put','quality','question','quickly','quite','race','radio','raise','range','rate','rather','reach','read','ready','real','reality','realize','really','reason','receive','recent','recently','recognize','record','red','reduce','reflect','region','relate','relationship','religious','remain','remember','remove','report','represent','Republican','require','research','resource','respond','response','responsibility','rest','result','return','reveal','rich','right','rise','risk','road','rock','role','room','rule','run','safe','same','save','say','scene','school','science','scientist','score','sea','season','seat','second','section','security','see','seek','seem','sell','send','senior','sense','series','serious','serve','service','set','seven','several','sex','sexual','shake','share','she','shoot','short','shot','should','shoulder','show','side','sign','significant','similar','simple','simply','since','sing','single','sister','sit','site','situation','six','size','skill','skin','small','smile','so','social','society','soldier','some','somebody','someone','something','sometimes','son','song','soon','sort','sound','source','south','southern','space','speak','special','specific','speech','spend','sport','spring','staff','stage','stand','standard','star','start','state','statement','station','stay','step','still','stock','stop','store','story','strategy','street','strong','structure','student','study','stuff','style','subject','success','successful','such','suddenly','suffer','suggest','summer','support','sure','surface','system','table','take','talk','task','tax','teach','teacher','team','technology','television','tell','ten','tend','term','test','than','thank','that','the','their','them','themselves','then','theory','there','these','they','thing','think','third','this','those','though','thought','thousand','threat','three','through','throughout','throw','thus','time','to','today','together','tonight','too','top','total','tough','toward','town','trade','traditional','training','travel','treat','treatment','tree','trial','trip','trouble','true','truth','try','turn','TV','two','type','under','understand','unit','until','up','upon','us','use','usually','value','various','very','victim','view','violence','visit','voice','vote','wait','walk','wall','want','war','watch','water','way','we','weapon','wear','week','weight','well','west','western','what','whatever','when','where','whether','which','while','white','who','whole','whom','whose','why','wide','wife','will','win','wind','window','wish','with','within','without','woman','wonder','word','work','worker','world','worry','would','write','writer','wrong','yard','yeah','year','yes','yet','you','young','your','yourself'];

const board = document.getElementById('board');
let boardHeight = 0.8*visualViewport.height;
let boardWidth = 0.75*visualViewport.width;

// pretty sure i'll use an input box for this
// const user = document.getElementById('username').value;
const leaderboard = document.getElementById('leaderboard');

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

//
//
// ############### might have to change this to only start after user input is done
//
//
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
            // add the actual score to the stored array key value pair
            //
            // change to displaying the leaderboard state
            //
            // in the leaderboard state have an option to play again 
            // which brings you back to the 
            alert(`Game Over \n${wordsComplete} words answered`);
            location.reload();
        }
    });
}

function removeWord(word) {
    document.getElementById(word).remove();
    wordsDisplayed = wordsDisplayed.filter((w) => {return w !== word;});
}

function displayLeaderboard() {
    // maybe change display visibility of the board vs leaderboard elements

    // show the current user + score
    // not sure if i'll have to change this to work when multiple ppl submit
    let div = document.createElement('div'); 
    div.setAttribute('id', currUser);
    div.style.position = 'absolute';
    div.style.color = 'white';      
    leaderboard.appendChild(div);
    div.innerText = `Your Score: ${wordsComplete}`;

    // show the top 3
    if (localStorage) {
        localStorage.setItem(topScores, []);
        // manipulate the array
        // better to save key = score, value ={name1: score, name2:score}??
        // as compared to indiv key value pairs i think
    } else {
        console.log('Error');
    }
}

function maybeAddScore() {
    const scores = Object.values(localStorage);

    if (scores.length < 3) {
        localStorage.setItem(user, JSON.stringify(wordsComplete));
    } else {
        const keys = Object.keys(localStorage); // key and value pair have same index
        // change according to notes in lines 120 ish idkkk
    }
}