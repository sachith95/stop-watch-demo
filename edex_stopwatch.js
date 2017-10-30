
var second=0;
var milSec=0;
var timeRec;
var click=0;
var print="";

start();
function startstop()
{
     click++;
           
            timeRec=setInterval(function(){
                if(click===1){ 
                if(milSec==100)
                    {
                        second++;
                        milSec=0;
                    }
                    milSec++
                     document.getElementById("stopwatch").innerHTML=second+"."+milSec;
                        }
        else if(click===2)
            {
                document.getElementById("stopwatch").innerHTML=second+"."+milSec;
                click=0;
            }
            
                },10)
}

function reset()
{
   milSec=0;
         second=0;
         document.getElementById("stopwatch").innerHTML=second+"."+milSec;   
}
function printTime()
{
       print +=document.getElementById("stopwatch").textContent+"<br/>";
    
        document.getElementById("recTimePrint").innerHTML=print;
         
}

function start()
{
    document.getElementById('startstop').addEventListener('click',startstop);
        
    
     document.getElementById("reset").addEventListener('click',reset);
    
     document.getElementById('recTime').addEventListener('click',printTime);
    
}
