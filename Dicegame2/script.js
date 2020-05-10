let scores, roundScore, activePlayer, gamePlaying;

const bNew=document.querySelector("btn-new");

function start() {
    scores= [0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;

    document.getElementById("dice1").style.display="none";
    document.getElementById("dice2").style.display="none";

    document.getElementById("score-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0"
    
    document.getElementById("name-0").textContent="Player 1";
    document.getElementById("name-1").textContent="Player 2";
    
    document.querySelector('.player-0-panel').classList.Remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');   
}
start();
bNew.addEventListener

document.querySelector("btn-roll").addEventListener("click",()=>{
   if(gamePlaying){
       let d1=Math.floor(Math.random()*6)+1;
       let d2=Math.floor(Math.random()*6)+1;
    console.log(d1+""+d2);
   }
    
})