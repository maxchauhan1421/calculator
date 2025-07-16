
var CreateBubbole = document.querySelector('.bubblescreen');

var rn = 0;
var timerZero='';
var timer = 60;
var Bubbole='';
var score=0;



  function getnewHit(){
  rn = Math.floor(Math.random()*10);
     document.querySelector('#hitNumber').textContent= rn;   
 } 

function secondRun(){
  timerZero=setInterval(function(){
     if(timer>0)
    {
    timer--;
    document.querySelector('#timer').textContent=timer;
    }
    else{
       (timerZero);
    CreateBubbole.innerHTML='<h1> Game is over </h1>'
    }
  },1000)
}

function Score(){
 
 
  score +=10;
  document.querySelector('#Score').textContent = score;
 
}


function CreateBubboles(){
  for(var i=1;i<180;i++){
    rn=Math.floor(Math.random()*10)
  Bubbole += `<div class='bubble'>${rn}</div>`;
 CreateBubbole.innerHTML=Bubbole;
  }
}
 


  document.querySelector('.bubblescreen').addEventListener('click' , function(detail){
    var clickNum = Number(detail.target.textContent);
    if(clickNum === rn)
      {
      
         Score();
         getnewHit(); 
         CreateBubboles();
    }
    else{
       CreateBubboles(); 
    }
  });

  
secondRun();
getnewHit(); 
CreateBubboles();
/* VarificationBubbole(); */

