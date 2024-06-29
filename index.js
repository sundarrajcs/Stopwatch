
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
var hour = document.getElementById('hour');

resumefunction.setAttribute('style','display:none');

var count = 0;
var secondcount = 0;
var mincount = 0;
var hourcount = 0;


function starttime(){                    
    settimes = setInterval(()=>{        
        count += 1;
        
        millisecond.innerText = count.toString().padStart(3,0);
        if(count == 100){            
            count = 0;
            secondcount += 1;            
            sec.innerText = secondcount.toString().padStart(2,0);
        }

        if(secondcount == 59){
            count = 0;
            secondcount = 0; 
            mincount += 1;                       
            min.innerText = mincount.toString().padStart(2,0);
        }

        if(mincount == 59){
            count = 0;
            secondcount = 0;
            mincount = 0;
            hourcount += 1;
            hour.innerText= hourcount.toString().padStart(2,0);
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
    resumefunction.setAttribute('style','display:none');    
    stopfunction.setAttribute('style','display:visible');
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
