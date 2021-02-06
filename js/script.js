let scores,roundScores,activePlayer,dice,gamePlaying=false,dice12,target=100;

if(gamePlaying===false){
    document.querySelector('.dice1').classList.add('dice-1-block')
    document.querySelector('.dice2').classList.add('dice-2-block')
}

document.querySelector('.btn-roll').addEventListener('click',()=>{
    if(gamePlaying){
        // document.querySelector('#target-score').classList.toggle('target')
        dice1 = Math.floor(Math.random()*6+1);
        dice2 = Math.floor(Math.random()*6+1);
        dice12.push(dice1,dice2)
        let diceDom1 = document.querySelector('.dice1');
        diceDom1.style.display = 'block';
        let diceDom2 = document.querySelector('.dice2');
        diceDom2.style.display = 'block';
        // diceDom.style.transition = 'all 0.5s ease';
        diceDom1.src = src=`images/Dice-${dice1}.png`
        diceDom2.src = src=`images/Dice-${dice2}.png`

        // udating scores now

        if(dice1 !==1 & dice2 !==1){
            // add score
            roundScores +=dice1+dice2;
            document.getElementById('current-'+activePlayer).textContent = roundScores;
            // console.log(dice12[dice12.length-2]+" "+dice12[dice12.length-1]);
            if(dice12[dice12.length-2] == 6 && dice12[dice12.length-1] == 6){
                dice12.splice(1,dice12.length);
                nextPlayer();
            }
        }else{
            //next Player
            nextPlayer()
            
            
        }

    }
    
})


document.querySelector('.btn-hold').addEventListener('click',()=>{
    if(gamePlaying){
        scores[activePlayer] += roundScores
        
        document.getElementById('score-'+activePlayer).innerText = scores[activePlayer];

        //check plyer if won
        if(scores[activePlayer]>=target){
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('#name-'+activePlayer).innerHTML = 'WINNER !'
            gamePlaying=false;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
            gamePlaying=false;
        }else{
            //nextPlayer
            nextPlayer();
        }
    }
    

})

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    gamePlaying=true;
    scores =[0,0];
    dice12 =[0];
    roundScores = 0;
    activePlayer = 0;
    
    if(target!==null){
        document.querySelector('.winningTarget').textContent = "Winning Target: "+target;
    }else{
        document.querySelector('.winningTarget').textContent = "Winning Target: "+100;
    }
    
 
// document.querySelector('#current-'+activePlayer).innerHTML = dice;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').innerHTML = 'PLAYER 1'
    document.getElementById('name-1').innerHTML = 'PLAYER 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

document.querySelector(".btn-setTarget").addEventListener('click',()=>{
    if(gamePlaying===false){
        target = prompt("What is the new target for winning game ?")
        init()
    }
})

const nextPlayer = ()=>{
        roundScores = 0;
        document.getElementById("current-0").innerText = roundScores;
        document.getElementById("current-1").innerText = roundScores;
        activePlayer === 0 ? activePlayer=1 : activePlayer=0;

        // activePlayer === 0 ? (document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active"),activePlayer=1,document.querySelector(".player-"+activePlayer+"-panel").classList.add("active"))  : (document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active"),activePlayer=0,document.querySelector(".player-"+activePlayer+"-panel").classList.add("active"));

        // (activePlayer = 1,document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active"),
        // document.querySelector(".player-"+activePlayer+"-panel").classList.add("active"))

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}