const username=document.getElementById("username");
const password=document.getElementById("password");

const eyeballL=document.querySelector(".eyeball-l");
const eyeballR=document.querySelector(".eyeball-r");

const handL=document.querySelector(".hand-l");
const handR=document.querySelector(".hand-r");

username.addEventListener("input",()=>{

let move=Math.min(username.value.length*2,15);

eyeballL.style.transform=
`translateX(${move}px) rotate(20deg)`;

eyeballR.style.transform=
`translateX(${move}px) rotate(-20deg)`;

});

password.addEventListener("focus",()=>{

handL.classList.add("cover");
handR.classList.add("cover");

});

password.addEventListener("blur",()=>{

handL.classList.remove("cover");
handR.classList.remove("cover");

});
