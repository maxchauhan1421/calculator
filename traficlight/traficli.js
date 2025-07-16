let box=document.querySelector('.box');
let red=document.querySelector('#red');
let yellow=document.querySelector('#yellow');
let green=document.querySelector('#green');
let color='1'

            //red/////
red.style.backgroundColor=' #ff0000 ';
setTimeout(()=>{
  red.style. backgroundColor='transparent';
},3000); 
            // yellow//
yellow.style. backgroundColor='transparent';
setTimeout(()=>{
    yellow.style. backgroundColor='#ffff00';
},3000);
setTimeout(()=>{
  yellow.style. backgroundColor='transparent';
},12000);

          //green//

green.style. backgroundColor=' transparent ';
setTimeout(()=>{
     green.style. backgroundColor='#008000';
},12000);
green.style. backgroundColor=' transparent ';






               // button for event ex
/* let btn=document.querySelector('button');

btn.addEventListener('click',()=>{
  console.log('hello-1');
});
btn.addEventListener('click',()=>{
  console.log('hello-2');
})
let remov=('click',()=>{
  console.log('hello-3')
})
btn.addEventListener('click',remov);

btn.removeEventListener('click',remov); */


/* yellow.style. backgroundColor=' yellow ';
setTimeout(()=>{
    yellow.style. backgroundColor='transparent';
},12000);
green.style. backgroundColor=' green ';
setTimeout(()=>{
     green.style. backgroundColor='transparent';
},24000) */





/* red.style.backgroundColor=' red ';
    setTimeout(()=>{
      red.style. backgroundColor='transparent';
    },2000); */







  /*   if(color==='1'){
      color='0'
      red.style.backgroundColor='red';
      red.style.transform='scale(1)';
      
      setTimeout(()=>{
        red.style. backgroundColor='transparent';
         red.style.transform='scale(1)'
      },2000); 
    }
     else{
      color='1'
      yellow.style. backgroundColor=' yellow ';
      setTimeout(()=>{
        yellow.style. backgroundColor='transparent';
    },4000);
  } */