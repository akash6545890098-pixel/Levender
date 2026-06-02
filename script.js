*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#52c241;
}

.container{
position:relative;
}

.login-box{
background:#fff;
width:300px;
padding:80px 25px 25px;
border-radius:10px;
}

.login-box label{
display:block;
margin-top:10px;
font-size:12px;
font-weight:bold;
}

.login-box input{
width:100%;
padding:10px;
border:none;
border-bottom:2px solid #ccc;
outline:none;
}

.login-box button{
width:100%;
padding:12px;
margin-top:20px;
border:none;
border-radius:25px;
background:#4dc43d;
font-weight:bold;
cursor:pointer;
}

.panda{
position:absolute;
left:50%;
transform:translateX(-50%);
top:-120px;
width:180px;
height:180px;
}

.face{
width:130px;
height:120px;
background:#fff;
border-radius:50%;
margin:auto;
position:relative;
}

.ear{
width:40px;
height:40px;
background:#31224b;
border-radius:50%;
position:absolute;
top:0;
}

.ear-l{
transform:rotate(-38deg);
left:20px;
}

.ear-r{
transform:rotate(38deg);
right:20px;
}

.eye{
width:28px;
height:34px;
background:#31224b;
border-radius:50%;
position:absolute;
top:35px;
overflow:hidden;
}

.eye-l{
left:25px;
}

.eye-r{
right:25px;
}

.eyeball-l,
.eyeball-r{
height:0.6em;
width:0.6em;
background:#fff;
border-radius:50%;
position:absolute;
left:0.6em;
top:0.6em;
transition:0.2s;
}

.eyeball-l{
transform:rotate(20deg);
}

.eyeball-r{
transform:rotate(-20deg);
}

.blush-l,
.blush-r{
background:#ff8bb1;
height:1em;
width:1.37em;
border-radius:50%;
position:absolute;
top:4em;
}

.blush-l{
transform:rotate(25deg);
left:1em;
}

.blush-r{
transform:rotate(-25deg);
right:1em;
}

.nose{
position:absolute;
left:58px;
top:65px;
width:10px;
height:10px;
border-right:3px solid #444;
border-bottom:3px solid #444;
transform:rotate(45deg);
}

.hand{
width:25px;
height:75px;
background:#31224b;
position:absolute;
top:70px;
border-radius:20px;
transition:.5s;
}

.hand-l{
left:10px;
}

.hand-r{
right:10px;
}

.hand-l.cover{
transform:translate(45px,-35px) rotate(-35deg);
}

.hand-r.cover{
transform:translate(-45px,-35px) rotate(35deg);
  }
