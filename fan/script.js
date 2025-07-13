
var on =document.querySelector('#green');
var off = document.querySelector('#red');
var circle=document.querySelector('#circle');
var one=document.querySelector('#one');
var two=document.querySelector('#two');
var three=document.querySelector('#three');
var angle = 0;
var speed = 0
var rotating = false;
 
    function rotateon(){
        if(rotating)
        {
             angle +=1;
             circle.style.transform =`rotate(${angle}deg)`;
             requestAnimationFrame(rotateon);                      // Not save for variable
        }
      
    }

      function speedin1(){
               if(rotating)
              {
                angle+=speed;
                circle.style.transform =`rotate(${angle}deg)`;
              requestAnimationFrame(speedin1);                     // Not save for variable
              } 
      }
      

    on.addEventListener('click',()=>{
        if(rotating === false){
            rotating = true ;                                     
            rotateon();     
        } 
       
    });


    off.addEventListener('click',()=>{
         if(rotating === true)
        {
            rotating = false ;
            rotateon();
        } 
    
    }) 

    

      one.addEventListener('click',()=>{
    
        if(speed === 0)
         {
                speed = 3 ;
                speedin1();
         }
         else{
                speed = 3;
             }   
        })
   two.addEventListener('click',()=>{
         if(speed === 0)
         {
                speed = 6;
                speedin1();
         }
         else{
                 speed = 6;
             }
                
        })    
     three.addEventListener('click',()=>{
         if(speed === 0)
         {
                speed = 9;
                speedin1();
         }
         else{
                speed = 9;
             }
            
    }) 
      

