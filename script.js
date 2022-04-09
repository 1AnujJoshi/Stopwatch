window.onload = function () {

var hours = 00;
var mins = 00;
var secs = 00;
var milli = 00;

var Hours = document.getElementById('hours');
var Mins = document.getElementById('mins');
var Secs = document.getElementById('secs');
var Milli = document.getElementById('milli');

var btnStart = document.getElementById('btn-start');
var btnStop = document.getElementById('btn-stop');
var btnReset = document.getElementById('btn-reset');
var Interval;

btnStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

btnStop.onclick = function(){
    clearInterval(Interval);
}

btnReset.onclick = function(){
    clearInterval(Interval);
    location.reload();   
}

function startTimer () {
    milli++; 
    
    if(milli <= 9){
        Milli.innerHTML = "0" + milli;
    }
    
    if (milli > 9){
        Milli.innerHTML = milli;
    } 
    
    if (milli > 99) {
      secs++;
      Secs.innerHTML = "0" + secs;
      milli = 0;
      Milli.innerHTML = "0" + 0;
    }
    
    if(secs <= 9){
        Secs.innerHTML = "0" + secs ;
    }

    if (secs > 9){
      Secs.innerHTML = secs;
    }

    if(secs > 59){
        mins++;
        Mins.innerHTML = "0" + mins;
        secs = 0;
        Secs.innerHTML = "0" + 0;
    }

    if(mins <= 9){
        Mins.innerHTML = "0" + mins;
    }

    if( mins > 9){
        Mins.innerHTML = mins;
    }

    if(mins > 59){
        hours++;
        Hours.innerHTML = "0" + hours;
        mins = 0;
        Mins.innerHTML = "0" + 0;
    }
     
    if(hours > 9){
        Hours.innerHTML = hours;
    }
  
  }



}