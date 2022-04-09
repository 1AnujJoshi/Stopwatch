window.onload = function () {

// variables initialised with zero at starting
var hours = 00;
var mins = 00;
var secs = 00;
var milli = 00;

//getting all the elements whose innerhtml needs to be changed while running stopwatch
var Hours = document.getElementById('hours');
var Mins = document.getElementById('mins');
var Secs = document.getElementById('secs');
var Milli = document.getElementById('milli');

// getting all the button by their id's 
var btnStart = document.getElementById('btn-start');
var btnStop = document.getElementById('btn-stop');
var btnReset = document.getElementById('btn-reset');

//variable for setting an interval
var Interval;

// start button -interval is cleared- interval is set and stopwatch starts
btnStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(Timer, 10);
}

//stop button stops the stopwatch - value gets paused- interval is cleared
btnStop.onclick = function(){
    clearInterval(Interval);
}

//reset button - interval is cleared and all the variables are initialised to 0 and inner text is changed t0 00 as well
btnReset.onclick = function(){
    clearInterval(Interval);
    hours = 0;
    mins = 0;
    secs = 0 ;
    milli = 0;
    Hours.innerHTML = "00";
    Mins.innerHTML = "00";
    Secs.innerHTML = "00" ;
    Milli.innerHTML = "00";  
}

//Timer function which controls the seconds, minutes and hours to be displayed in stopwatch
function Timer () {
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
    // if seconds becomes 60 then increase 1 minute and initialize seconds to 0
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
    // if minutes becomes equals to 60 initiaze it with 0 and increase hour by 1
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