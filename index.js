
var reset = document.getElementById('reset').addEventListener('click',resetfun);
var start = document.getElementById('start').addEventListener('click',startfun);
var stop = document.getElementById('stop').addEventListener('click',stopfun);
var resume = document.getElementById('resume').addEventListener('click',resumefun);

var mincount = 0;
var seccount = 0;
var millisecondcount = 0;

   
        
        function starttime(){                    
            settimes = setInterval(()=>{
                   console.log('hii') 
            },1000);
        }
                // millisecondcount = millisecondcount+1;
        
                // var min =  document.querySelector('#min');
                // var sec =  document.querySelector('#sec');
                // var millisecond = document.querySelector('#millisecond');

                
                // min.innerHTML = mincount.toString().padStart(2,0);
                // sec.innerHTML = seccount.toString().padStart(2,0);
                // millisecond.innerHTML = millisecondcount.toString().padStart(3,0);

                // if(millisecondcount == 100){
                // millisecondcount = 0;
                // seccount += 1;
                
                //     if(seccount > 10){
                //             mincount += 1;    
                //             seccount = 0;    
                //     }
                //     if(mincount == 3){
                //         console.log('hi')
                //     }
            // }                                         

    function times(){
        console.log('Function Ok');
    }
    
    function startfun(){
        starttime();
    }

    function resetfun(){
        console.log('reset');
    }

    function stopfun(){ 
        console.log('stop')               
        clearInterval(settimes);                     
    }

    function resumefun(){
        console.log('Resume');
    }



    function sample(){
        console.log('Sample Page');
    }

    sample();
