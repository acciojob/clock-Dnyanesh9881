//your JS code here. If required.
let timer=document.getElementById("timer");
 var display = new Date().toLocaleTimeString();
let date=new Date();
 timer.innerHTML =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+", "+display;
 
