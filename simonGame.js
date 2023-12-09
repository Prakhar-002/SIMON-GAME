let gameSeq=[];
let userSeq=[];
let count=1;

let btns=["color1", "color2","color3","color4"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
let score=0;


document.addEventListener("keypress", function(){
    if(started== false){
        // console.log("game started");
        started=true;

        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },300);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
    
    let randInd= Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);

    if (score<level){
        score= level;
        // console.log(`your score is ${score}`);
        let h2= document.querySelector("h2");
        h2.innerText=`Your highest score is: ${score}`;
    }

} 

function checkAns(idx){
    if (gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelup,800);
        }
    }else{
        h3.innerHTML=`GAME OVER!!! your score is <b>${level}</b> .
        <br>press any key to start again .Number of times you play is "${count}"`;
        document.querySelector("body").style.backgroundColor= "#CD1818"
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor= "#5C8374"
        },200);
        count++;
        reset();
    }
}

function btnPress (){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}
let allBtns =document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener( "click",btnPress);
}


function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}




// let body=document.querySelector("body");
// document.createElement('h2');

// let h2= document.querySelector("h2");
// h2.innerText=`Your score is ${score}`;
// body.appendChild (h2);

// body.appendChild ("h2");
// let h2= document.querySelector("h2");
