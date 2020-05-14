//decided to go for 2 dice as I wanted to play it with my daughter (who is 4) - with 2 dice, the odds are easier so we can play more without losing 1/36 chance against 1/6.

let scores, roundScore, activePlayer, gamePlaying; //creating the global variables but with no values

const bNew=document.querySelector(".btn-new");
const bRoll=document.querySelector(".btn-roll");
const bHold=document.querySelector(".btn-hold");

//variables for th buttons 

const dice1=document.getElementById("dice1");
const dice2=document.getElementById("dice2");

//variables for the dice

//potential to make variables for other elements that will change but didn't in the script as it was easier to get my head round.

function start() {
    //this functions ensures that scores are set to 0 and first player is p1. Removing the active and winner aspects (from previous games). Essentially a reset.
    
    scores= [0,0]; //array for the scores, with both at 0
    activePlayer=0; //starts at 0 (player 1)
    roundScore=0; //set to zero
    gamePlaying=true;

    dice1.style.display="none";//removes the dice icon images
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
//ensures that after clicking the new game button, the start function runs.

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

    
    if(d1==1 && d2==1){//skipping to player 2 if dice is equal to 1 and added score to total
        nextPlayer();//will call the next player fn

    }
    else {
        roundScore+=d1+d2; //adds the rolls to the roundscore
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
        //changes to text display for the current player to the roundscore
    }
    }
     
});

//this is to ensure the active player switches during a game

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

    document.querySelector(".player-0-panel").classList.toggle("active"); //changes the class to active - aids in the CSS distinctions
    document.querySelector(".player-1-panel").classList.toggle("active");

    dice1.style.display="block";
    dice2.style.display="block";
};

//in my game you can only win if you get above the threshhold and then press the hold button (found it easier). Hold adds your roundscore to your total score (scores in this) stored as an array, dependent on who is the active player. 
bHold.addEventListener("click",()=>{
    if(gamePlaying){
        scores[activePlayer]+=roundScore;//adds round score to current score array

        document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];//displays the current score

        let input=document.querySelector(".final-score").value;
        let winningScore;

        if(input){
            winningScore=input;
        }
        else{
            winningScore=100;//winning threshold
        }

        //check if player has won the game
        if(scores[activePlayer]>=winningScore){
            //current score greater than threshhold
            document.querySelector("#name-"+activePlayer).textContent="Winner!";
            dice1.style.display="none";
            dice2.style.display="none";

            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");//changes the displays to state who is winner and removes active icon

            gamePlaying=false; //sets playing to false to ensure the game stops and can only be started again by hitting new game
        }
        else {
            nextPlayer();//if winning thresh hold not met by the playing who hit 'hold' then it calls on the next player function
        }
    }
});
