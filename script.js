//your JS code here. If required.
let timer=document.getElementById("timer");
 var display = new Date().toLocaleTimeString();
 timer.innerHTML = display;
 setTimeout(displayClock, 1000); 
