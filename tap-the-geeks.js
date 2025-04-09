const logo=document.querySelector("#space");
const sc=document.querySelector("#sc");
const resetbtn=document.querySelector("#res");
const easybtn=document.querySelector("#easy");
const medbtn=document.querySelector("#medium");
const hardbtn=document.querySelector("#hard");
let score=0;
logo.addEventListener("click",()=>{
    console.log("logo is clicked");
    score++;
    console.log(score);
    scdisplay(score);
})
const scdisplay=(score)=>{
    sc.innerText=score;
}
const easygame=()=>{
    const space=document.getElementById("space");
    space.style.animationDuration="100s";
    resetGame();
}
const medgame=()=>{
    const space=document.getElementById("space");
    space.style.animationDuration="70s";
    resetGame();
}
const hardgame=()=>{
    const space=document.getElementById("space");
    space.style.animationDuration="40s";
    resetGame();
}
const resetGame=()=>{
    sc.innerText=0;
    score=0;
}
resetbtn.addEventListener("click",resetGame);
easybtn.addEventListener("click",easygame);
medbtn.addEventListener("click",medgame);
hardbtn.addEventListener("click",hardgame);