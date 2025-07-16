var blackeyes = document.querySelector('.black');
var main = document.querySelector('.main')
console.log(blackeyes);

main.addEventListener('mousemove',(dets)=>{
   blackeyes.style.left = dets.x+'px';
   blackeyes.style.top = dets.y+'px';
})



/* main.addEventListener('mousemove',(dets)=>{
  cursor.style.left = dets.x+'px';
  cursor.style.top = dets.y+'px';
}) */