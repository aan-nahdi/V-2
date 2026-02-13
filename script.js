const sections=document.querySelectorAll('.section');
const signupButton=document.querySelector('.button');

let lastScrollTime=Date.now();
let lastScrollY=window.scrollY;
let scrollSpeed=0;

window.addEventListener("scroll",()=>{

let currentY=window.scrollY;

scrollSpeed=Math.abs(currentY-lastScrollY);
lastScrollY=currentY;
lastScrollTime=Date.now();

revealSections();
adjustEnvironment();

});

function revealSections(){

sections.forEach((el,i)=>{

const rect=el.getBoundingClientRect();

if(rect.top < window.innerHeight-120){

let delay = scrollSpeed < 10 ? i*200 : i*60;

setTimeout(()=>{
el.style.opacity="1";
el.style.transform="translateY(0)";
},delay);

}

});

}

function adjustEnvironment(){

if(scrollSpeed < 5){
document.body.style.background="#060606";
}else{
document.body.style.background="#050505";
}

}

setInterval(()=>{

if(Date.now()-lastScrollTime > 3000){

document.body.style.boxShadow="inset 0 0 140px rgba(255,255,255,0.04)";

setTimeout(()=>{
document.body.style.boxShadow="none";
},2000);

}

},1000);


const founder=document.querySelector('.founder-img');

if(founder){

window.addEventListener("scroll",()=>{

const rect=founder.getBoundingClientRect();

if(rect.top < window.innerHeight/1.3){

founder.classList.add("founder-active");

}

});

}

if(signupButton){

window.addEventListener("scroll",()=>{

if(window.scrollY > document.body.scrollHeight * 0.6){

signupButton.style.transform="scale(1.05)";

setTimeout(()=>{

signupButton.style.transform="scale(1)";

},800);

}

});

}

/* AMBIENT SOUND */

let audio=new Audio("assets/ambient.mp3");
audio.loop=true;
audio.volume=0.12;

document.addEventListener("click",()=>{
audio.play();
},{once:true});
