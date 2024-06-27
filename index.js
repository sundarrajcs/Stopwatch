
var reset = document.getElementById('reset').addEventListener('click',resetfun);
var start = document.getElementById('start').addEventListener('click',startfun);
var stop = document.getElementById('stop').addEventListener('click',stopfun);
var resume = document.getElementById('resume').addEventListener('click',resumefun);


var startfunction =  document.getElementById('start');
var resumefunction = document.getElementById('resume');
var stopfunction = document.getElementById('stop');

var millisecond = document.getElementById('millisecond');
var sec = document.getElementById('sec');
var min = document.getElementById('min');   

resumefunction.setAttribute('style','display:none');

var count = 0;
var secondcount = 0;
var mincount = 0;



function starttime(){                    
    settimes = setInterval(()=>{        
        count += 1;
        
        millisecond.innerText = count.toString().padStart(3,0);
        if(count == 100){            
            count = 0;
            secondcount += 1;            
            sec.innerText = secondcount.toString().padStart(2,0);
        }

        if(secondcount == 10){
            count = 0;
            secondcount = 0; 
            mincount += 1;           
            min.innerText = mincount.toString().padStart(2,0);
        }
    },10);
}

function startfun(){    
    starttime();
    startfunction.setAttribute('disabled',true);
}

function resetfun(){
    clearInterval(settimes);    
    count = 0;
    secondcount = 0;
    mincount = 0;
    millisecond.innerText = count.toString().padStart(3,0);
    sec.innerText = secondcount.toString().padStart(2,0);
    min.innerText = mincount.toString().padStart(2,0);
    startfunction.removeAttribute('disabled');
}

function stopfun(){        
    if(count > 0){
        clearInterval(settimes);
        if(settimes){
            resumefunction.setAttribute('style','display:visible');                   
            stopfunction.setAttribute('style','display:none'); 
        }
    } 
              
}

function resumefun(){      
    
    stopfunction.setAttribute('style','display:visible'); 
    resumefunction.setAttribute('style','display:none');                   
    starttime();  
}




// var mincount = 0;
// var seccount = 0;
// var millisecondcount = 0;

        
//         function starttime(){                    
//             settimes = setInterval(()=>{
//                    console.log('hii') 
//             },1000);
//         }
//                 // millisecondcount = millisecondcount+1;
        
//                 // var min =  document.querySelector('#min');
//                 // var sec =  document.querySelector('#sec');
//                 // var millisecond = document.querySelector('#millisecond');

                
//                 // min.innerHTML = mincount.toString().padStart(2,0);
//                 // sec.innerHTML = seccount.toString().padStart(2,0);
//                 // millisecond.innerHTML = millisecondcount.toString().padStart(3,0);

//                 // if(millisecondcount == 100){
//                 // millisecondcount = 0;
//                 // seccount += 1;
                
//                 //     if(seccount > 10){
//                 //             mincount += 1;    
//                 //             seccount = 0;    
//                 //     }
//                 //     if(mincount == 3){
//                 //         console.log('hi')
//                 //     }
//             // }                                         

//     function times(){
//         console.log('Function Ok');
//     }
    
//     function startfun(){
//         starttime();
//     }

//     function resetfun(){
//         console.log('reset');
//     }

//     function stopfun(){ 
//         console.log('stop')               
//         clearInterval(settimes);                     
//     }

//     function resumefun(){
//         console.log('Resume');
//     }



//     function sample(){
//         console.log('Sample Page');
//     }

//     sample();
