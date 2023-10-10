const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let interval
let timeLeft = 60;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;


    timer.innerHTML = formattedTime;
}

function startTimer(){
interval = setInterval(()=>{
    // decreasing time
    timeLeft--;
   updateTimer();
//    showing alert if timer elapse
    if(timeLeft == 0){
        // this resets the timer
        clearInterval(interval)
        alert("Time is Up")
    }
}, 1000)

}
function stopTimer(){
    // console.log('youve clicked stop')
    clearInterval(interval);

}
function resetTimer(){
// console.log('youve clicked reset')
clearInterval(interval);
timeLeft = 1500;
updateTimer()

}




start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)