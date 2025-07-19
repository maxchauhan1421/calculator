var blackeyes = document.querySelectorAll('.black');
var main = document.querySelector('.main')
console.log(blackeyes);
var body = document.querySelector('body');


blackeyes.forEach((val)=>{
  body.addEventListener('mousemove',(dets)=>{
   body.style.left = dets.x+'px';
   console.log(val)
  })
})






/* main.addEventListener('mousemove',(dets)=>{
  cursor.style.left = dets.x+'px';
  cursor.style.top = dets.y+'px';
}) */