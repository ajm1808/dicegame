let score, roundScore, gamePlaying;

const bNew=document.querySelector(".btn-new");
const bRoll=document.querySelector(".btn-roll");
const dice=document.getElementById("dice");
let player=document.getElementById("current-0");

function start() {
    scores=[0];
    roundScore=0;
    gamePlaying=true;

    dice.style.display="none";

    document.getElementById("score-0").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.querySelector("#header").textContent="The game begins when you start rolling...";
  
}
start();

bNew.addEventListener("click",start);

bRoll.addEventListener('click',()=>{
   if(gamePlaying){
    //if game is playing the button roll will cause the function to generate a random number   
    let d1=Math.floor(Math.random()*6)+1;

    //dice will only appear (block) when roll button is clicked. The numbers that appear will match the numbers of d1 & d2
    dice.style.display="block";
    dice.src="img/dice"+d1+".png";

    if(d1!==1){
        roundScore+=d1;
        document.querySelector("#current-0").textContent=roundScore;
        dice.style.display="block";
        document.getElementById("score-0").textContent=(d1+" "+"keep going");
    }
    else {
        document.querySelector("#current-0").textContent="You rolled a 1 - you lost!";
        dice.style.display="none";
        document.getElementById("score-0").textContent=("A"+" "+ d1+"!"+ " "+ "booooo!");
        document.getElementById("current-0").textContent="0";
        document.querySelector("#header").textContent="Loser!";

    }
    if(gamePlaying){
        scores[player]+=roundScore;


        let winningScore=20;
        //check if player has won the game
        if(roundScore>=winningScore){
            document.getElementById("score-0").textContent="Winner";
            document.getElementById("score-0").style.display="block";            
            dice.style.display="none";
            document.querySelector("#header").textContent="You won!";

            gamePlaying=false;
        }
        else {
            document.querySelector("#header").textContent="Not yet!";

        }
    }
    
    
}
});


