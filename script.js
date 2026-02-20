
const sections=document.querySelectorAll('.section');

window.addEventListener("scroll",()=>{
sections.forEach(section=>{
const rect=section.getBoundingClientRect();
if(rect.top < window.innerHeight-120){
section.style.opacity="1";
section.style.transform="translateY(0)";
}
});
});

// assessment personalization preview
function showResult(){
const goal=document.getElementById("goal").value;
const result=document.getElementById("result");
result.innerHTML="Based on your focus on "+goal+", Emotional Gym recommends starting with Foundation Practice.";
}
