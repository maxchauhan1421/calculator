function table(){
var submit = document.querySelector('#submit');  

submit.addEventListener('click',()=>{



var input = parseInt(document.querySelector('input').value);
var i=1;
var result='';
for(i=1;i<=10;i++)
{

  document.writeln(  i*input + '<br>')
  
}
      

})
}
table(); 


  