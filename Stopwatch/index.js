const timerElement = document.getElementById("timer");

const startElement = document.getElementById("start");

const stopElement = document.getElementById("stop");

const resetElement = document.getElementById("reset");

const showContent = document.getElementById('stopwatch')

// setting elapse time to know the time interval
// timerinterval and starttime
let start_time = 0;
let elapsed_time = 0;
let time_interval;

function startTimer(){
// setting startTime
start_time = Date.now() - elapsed_time;
// calling a function and setting time interval to 10milisec
time_interval = setInterval(()=>{
   elapsed_time = Date.now() - start_time;
   timerElement.textContent = formatTime(elapsed_time)
}, 10);
if(elapsed_time == 0){
    showContent.textContent = "Remember, You've got this!!"
}else if(elapsed_time == 60){
    showContent.textContent = "How's your day going?"
}else if(elapsed_time == 23){
    showContent.textContent = "You did great!"
}
// adding disabled to it so that in case one press on the start, 
// that client can press on the start again
startElement.disabled = true;
stopElement.disabled = false;
}
// creating a function called formatime
// wrap it around elapsed time and call it as a parameter
function formatTime(elapse_time){
const milisec = Math.floor((elapsed_time % 1000) / 10);
const seconds = Math.floor((elapsed_time % (1000 * 60) / 1000));
const minutes = Math.floor((elapsed_time % (1000 * 60 * 60) / (60 *1000)));
const hours = Math.floor((elapsed_time / (1000 * 60 * 60)));

return(
    (hours ? (hours > 9 ? hours : "0" + hours):"00")
    + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes):"00")
    + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds):"00")
    + ":" +
    (milisec > 9 ? milisec : "0" + milisec)) 

}

function stopTimer(){
// using js in-built clear interval to clean the time_interval created at starttimer
clearInterval(time_interval);
// enabling the start button and disabling the stop button
startElement.disabled = false;
stopElement.disabled = true;
}

function resetTimer(){
// using js in-built clear interval to clean the time_interval created at starttimer
clearInterval(time_interval);
// setting the elapse_time to 0
elapsed_time = 0;
// setting the timerelement with textcontent to 00
timerElement.textContent = "00:00:00";
// enabling the start button and disabling the stop button
startElement.disabled = false;
stopElement.disabled = true;
}

startElement.addEventListener("click", startTimer);

stopElement.addEventListener("click", stopTimer);

resetElement.addEventListener("click", resetTimer);


