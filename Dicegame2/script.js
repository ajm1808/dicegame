
// math.random for the dice generator
// if else statement for score (with sum)

const header=document.getElementById("header");
const start=document.getElementsByClassName("startagain");
const startBtn=document.getElementById("startagain");
const info=document.getElementsByClassName("playerinfo");
const total=document.getElementsByClassName("playerscoretotal");
const current=document.getElementsByClassName("currentscore");
const rollBtn=document.getElementsByClassName("rollbutton");

rollBtn.addEventListener('click',()=>{
    let current=document.getElementsByClassName("current score");
    let sum=(0);
    let total=document.getElementsByClassName("player score total");
    let c1= Math.floor(Math.random()*6)+1;
    if (c1>1&&sum<20) {
        sum+=c1;
    }
    else if(c1==1&&sum<19){
        sum=0;
        info.textContent="You lose";
    }
    else if (sum>20) {
    info.textContent="You win - press start button to start again"
    }
    total.textContent=sum.value;
    current.textContent=c1.value;
})