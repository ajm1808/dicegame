let scores, roundScore, activePlayer, gamePlaying;

const bNew=document.querySelector(".btn-new");
const bRoll=document.querySelector(".btn-roll");
const bHold=document.querySelector(".btn-hold");

const dice1=document.getElementById("dice1");
const dice2=document.getElementById("dice2");

function start() {
    scores= [0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;

    dice1.style.display="none";
    dice2.style.display="none";

    document.getElementById("score-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0"
    
    document.getElementById("name-0").textContent="Player 1";
    document.getElementById("name-1").textContent="Player 2";
    
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');   
}
start();

bNew.addEventListener("click",start);

bRoll.addEventListener('click',()=>{
   if(gamePlaying){
    //if game is playing the button roll will cause the function to generate 2 random numbers   
    let d1=Math.floor(Math.random()*6)+1;
    let d2=Math.floor(Math.random()*6)+1;

    //dice will only appear (block) when roll button is clicked. The numbers that appear will match the numbers of d1 & d2
    dice1.style.display="block";
    dice2.style.display="block";
    dice1.src="img/dice"+d1+".png";
    dice2.src="img/dice"+d2+".png";

    //skipping to player 2 if dice is equal to 1 and added score to total
    if(d1==1 && d2==1){
        nextPlayer();

    }
    else {
        roundScore+=+d1+d2;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
    
    }
    }
     
});

function nextPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
    roundScore=0;
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    dice1.style.display="block";
    dice2.style.display="block";
};

bHold.addEventListener("click",()=>{
    if(gamePlaying){
        scores[activePlayer]+=roundScore;

        document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];

        let input=document.querySelector(".final-score").value;
        let winningScore;

        if(input){
            winningScore=input;
        }
        else{
            winningScore=100;
        }

        //check if player has won the game
        if(scores[activePlayer]>=winningScore){

            document.querySelector("#name-"+activePlayer).textContent="Winner!";
            dice1.style.display="none";
            dice2.style.display="none";

            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");

            gamePlaying=false;
        }
        else {
            nextPlayer();
        }
    }
});
