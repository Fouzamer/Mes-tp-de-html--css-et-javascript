let t1s = 0
let t2s = 0

let t1Score = document.getElementById("t1score")
let t2Score = document.getElementById("t2score")

t1Score.innerText = t1s
t2Score.innerText = t2s

function plusOneTeamOneScore() {
    t1s += 1
    t1Score.innerText = t1s 
}
function plusTwoTeamOneScore() {
    t1s += 2
    t1Score.innerText = t1s 
}
function plusTreeTeamOneScore() {
    t1s += 3
    t1Score.innerText = t1s 
}

function plusOneTeamTwoScore() {
    t2s += 1
    t2Score.innerText = t2s 
}
function plusTwoTeamTwoScore() {
    t2s += 2
    t2Score.innerText = t2s 
}
function plusTreeTeamTwoScore() {
    t2s += 3
    t2Score.innerText = t2s 
}
 
const pause = "PAUSE"
const play = "PLAY"
let playAndPausebtn= document.getElementById("play")
timerElement = document.getElementById("timer")
ballsElement = document.getElementById("balls")
var remainingTime = 5
let quater = 0
let quarter1 = document.getElementById("fstquater")
let quarter2 = document.getElementById("sndquater")
let quarter3 = document.getElementById("trdquater")
let quarter4 = document.getElementById("thquater")

function startTimer() {
    
    var timerElement = document.getElementById("timer");
    timerElement.innerHTML = remainingTime.toString();

    if (remainingTime === 0) {
        clearTimeout(timerId);
        timerElement.innerHTML = "BREAK!";
    } else {
        remainingTime--;
        var timerId = setTimeout(startTimer, 1000);
    }
}
function addQuaterScores( t1s, t2s) {
    if (quater === 1){
        quarter1.innerText = "1st Quater: " + t1s + "/" + t2s
    } else if (quater === 2){
        quarter2.innerText = "2nd Quater: " + t1s + "/" + t2s
    } else if (quater === 3){
        quarter3.innerText = "3rd Quater: " + t1s + "/" + t2s
    } else {
        quarter4.innerText = "4th Quater: " + t1s + "/" + t2s
    }
}

function pauseAndPlay() {

    if (playAndPausebtn.innerText !== pause) { //Lorsque je fait play
        playAndPausebtn.innerText = pause
        timerElement.style.display = "flex"
        ballsElement.style.display = "flex"
        remainingTime = 5
        startTimer()

    } else {
        playAndPausebtn.innerText = play
        timerElement.style.display = "none"
        ballsElement.style.display = "none"
        t1Score.innerText = t1s
        t2Score.innerText = t2s
        quater += 1
        addQuaterScores(t1s, t2s)

        
        
    }     
}


//       quarter1.innerText += t1s + "/" + t2s