/*
 * Copyright (c) 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */
const startingMinutes = 7;
let time = startingMinutes * 60;

var countdownEl = document.getElementById('countdown');
var countDownBar = document.getElementById('progressbar').style;

var temp = 0;
setTimeout(function () {
    setInterval(updateCountDown, 1000);
}, 3000);

function updateCountDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    // if ( time < 0){
    //     document.getElementById("quiz_submit_btn").disabled = true;
    // }
    temp = temp + 0.028;
    countDownBar.width = temp + "%";
    myFunction();
}

function myFunction() {
    var x = document.getElementById('dotID');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function quizQuestionsAnswered() {
    var count = 10;
    for (var i = 0; i < 10; i++) {
        try {
            document.querySelector('input[name="flexRadioDefault' + i + '"]:checked').value;
            count -= 1;
        } catch {
        }
    }
    if (count == 0) {
        document.getElementById("questionSubmission").innerHTML = "All answers are submitted sucessfully!"
    } else {
        document.getElementById("questionSubmission").innerHTML = count + " questions are not submitted"
    }
}
