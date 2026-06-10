function predictTraffic(){

let day=document.getElementById("day").value;
let time=document.getElementById("time").value;
let weather=document.getElementById("weather").value;

let congestion=20;

if(day==="Monday"||day==="Friday")
congestion+=20;

if(weather==="Rainy")
congestion+=20;

if(time>="08:00"&&time<="10:00")
congestion+=30;

if(time>="17:00"&&time<="19:00")
congestion+=30;

let level="Low";

if(congestion>70)
level="High";
else if(congestion>40)
level="Medium";

document.getElementById("result").innerHTML=
"Congestion: "+congestion+"%<br>Traffic Level: "+level;
}
