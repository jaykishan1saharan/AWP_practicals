let train = document.getElementById("train");
let timeInput = document.getElementById("timeInput");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let status = document.getElementById("status");

let position = 50;
let moveInterval;
let stopTimer;

// Start Button
startBtn.addEventListener("click", function () {

    let seconds = Number(timeInput.value);

    if (seconds <= 0 || isNaN(seconds)) {
        status.innerHTML = "Please enter a valid time!";
        return;
    }

    // Clear previous timers
    clearInterval(moveInterval);
    clearTimeout(stopTimer);

    status.innerHTML = "Train is moving...";

    // Move train every 100 milliseconds
    moveInterval = setInterval(function () {

        position = position + 10;

        // Get screen width
        let screenWidth = window.innerWidth;

        // Get train width
        let trainWidth = train.offsetWidth;

        // If train reaches the right side
        if (position + trainWidth >= screenWidth) {

            // Reset train to starting position
            position = 50;
        }

        train.style.left = position + "px";

    }, 100);

    // Automatically stop after entered time
    stopTimer = setTimeout(function () {

        clearInterval(moveInterval);

        status.innerHTML =
            "Train stopped after " + seconds + " seconds.";

    }, seconds * 1000);

});


// Stop Button
stopBtn.addEventListener("click", function () {

    clearInterval(moveInterval);
    clearTimeout(stopTimer);

    status.innerHTML = "Train stopped manually.";

});