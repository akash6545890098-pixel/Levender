const balls=document.querySelectorAll('.ball');
document.addEventListener('mousemove',(e)=>{
balls.forEach(ball=>{
let x=(e.clientX/window.innerWidth)*8;
let y=(e.clientY/window.innerHeight)*8;
ball.style.transform=`translate(${x}px,${y}px)`;
});
});
const password=document.getElementById('password');
const leftHand=document.querySelector('.left-hand');
const rightHand=document.querySelector('.right-hand');
password.addEventListener('focus',()=>{
leftHand.classList.add('cover');
rightHand.classList.add('cover');
});
password.addEventListener('blur',()=>{
leftHand.classList.remove('cover');
rightHand.classList.remove('cover');
});