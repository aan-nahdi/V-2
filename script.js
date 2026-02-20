
const sections=document.querySelectorAll('.section');

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const rect=section.getBoundingClientRect();

if(rect.top < window.innerHeight-120){
section.style.opacity="1";
section.style.transform="translateY(0)";
}

});

neuralAttention();

});

function neuralAttention(){

const speed=Math.abs(window.scrollY);

if(speed<10){
document.body.style.background="#070707";
}else{
document.body.style.background="#050505";
}

const btn=document.querySelector('.button');
if(window.scrollY > document.body.scrollHeight*0.6 && btn){
btn.style.transform="scale(1.08)";
setTimeout(()=>btn.style.transform="scale(1)",800);
}

}
