var bttones = document.querySelectorAll('.button');
var changevalue = true
var Reset = document.querySelector('#Reset');
var msgcontainer =  document.querySelector('.msg-container');
var new_game = document.querySelector('#new')
var msg= document.querySelector('#msg');
 
                 /* function of x and 0 */

bttones.forEach((val)=>{
  val.addEventListener('click',()=>{
    if(changevalue)
    {
      changevalue=0;
      val.innerHTML=changevalue
    }
  
    else{
      changevalue='X';
      val.innerHTML=changevalue
    }
    val.disabled = true;
    val.style.backgroundColor = '#ddd';
    val.style.color = 'black';
    checkindex();
  
  })
});

               /* arry of index */

var position=[
  [0,1,2],[0,3,6],[0,4,8],
  [3,4,5],[1,4,7],[6,7,8],
  [2,5,8],[6,4,2]
];

                /*  game is over */

function gameover(){
     for(button of bttones)
     {
          button.disabled=true;
          button.style.backgroundColor = '#ddd'
     } 
}
              /*    show this winer */
 
function showwiner(winer){
  msg.innerText=`Congratulation winer is ${winer}`;
  msgcontainer.classList.remove('hide');
}

            /* check of the position this value */

function checkindex(){
 for(index of position)
 {
  var pos1val = bttones[index[0]].textContent;
  var pos2val = bttones[index[1]].textContent;
  var pos3val = bttones[index[2]].textContent;

  if(pos1val != '' && pos2val != '' && pos3val != '')
  {
    if(pos1val === pos2val && pos2val === pos3val)
    {
      console.log('winer',pos1val)
      gameover();
      showwiner(pos1val);
    }
  }
 }
           
}

       /* reset and new btn function */

function reset(){
    for(button of bttones){
          button.innerHTML='';
          msgcontainer.classList.add('hide');
          button.disabled=false
    }
  }
    Reset.addEventListener('click',reset);
    new_game.addEventListener('click',reset)