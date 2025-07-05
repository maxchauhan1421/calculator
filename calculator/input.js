let string="";
let buttons=document.querySelectorAll('button')


for(let button of buttons){
  button.addEventListener('click',()=>{
   // button = string.innerHTML='string'
   if(button.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
   }

   else if(button.innerHTML=='CE'){
      string='';
       document.querySelector('input').value = string;
   }
else if(button.innerHTML=='DEL'){
      string=  string.substring(0,string.length-1);
       document.querySelector('input').value = string;
   }
   else{
      
   console.log(button);
   string = string + button.innerHTML;
   document.querySelector('input').value = string;

   }

  })
}
