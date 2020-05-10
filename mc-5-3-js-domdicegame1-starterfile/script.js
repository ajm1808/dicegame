
// math.random for the dice generator
// if else statement for score (with sum)

const header=document.getElementById("header");
const start=document.getElementsByClassName("start again");
const startBtn=document.getElementById("start again");
const info=document.getElementsByClassName("player info");
const total=document.getElementsByClassName("player score total");
const current=document.getElementsByClassName("current score");
const rollBtn=document.getElementsByClassName("roll button");

const function name(params) {

    
}

startBtn.addEventListener("click",()=>{

})

rollBtn.addEventListener("click",()=>{
    let current=document.getElementsByClassName("current score");
    let sum=(0);
    let c1= Math.floor(Math.random()*6)+1;
    let total=document.getElementsByClassName("player score total");

    total.textContent=sum;
    current.textContent=c1;

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

})