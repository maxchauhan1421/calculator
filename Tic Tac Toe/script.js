var bttones = document.querySelectorAll('.button');
var changevalue = true
var Reset = document.querySelector('#Reset');
var string;


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
  })
})