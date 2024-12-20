let playerscore=document.querySelector("#playerscore");
let computerscore=document.querySelector("#computerscore");

let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");

let winmsg=document.querySelector("#winner");
let infomsg=document.querySelector("#info");

let playerchoice="";
let computerchoice="";

let pscore=0;
let cscore=0;

let choices=["rock","paper","scissors"];

const score=()=>{
    computerchoice=choices[Math.floor(Math.random()*3)];
    if(playerchoice==="rock" && computerchoice==="scissors" || playerchoice==="paper" && computerchoice==="rock" || playerchoice==="scissors" && computerchoice==="paper"){
        pscore++;
        winmsg.innerText="You WON!!";
        infomsg.innerText=`Your ${playerchoice} beats ${computerchoice}`;
    }
    else if(playerchoice===computerchoice){
        winmsg.innerText="It's a tie!!";
        infomsg.innerText=`You both choosed ${playerchoice}`;
    }
    else{
        cscore++;
        winmsg.innerText="Computer WON!!";
        infomsg.innerText=`${computerchoice} beats your ${playerchoice}`;
    }
    playerscore.innerText="Player Score : "+pscore;
    computerscore.innerText="Computer Score : "+cscore;
}

rock.addEventListener("click",()=>{
    playerchoice="rock";
    score();
});
paper.addEventListener("click",()=>{
    playerchoice="paper";
    score();
});
scissors.addEventListener("click",()=>{
    playerchoice="scissors";
    score();
});