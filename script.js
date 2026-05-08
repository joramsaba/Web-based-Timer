let seconds = 0;
let interval = null;

const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    timerDisplay.textContent =
        String(hrs).padStart(2, '0') + ":" +
        String(mins).padStart(2, '0') + ":" +
        String(secs).padStart(2, '0');
}

document.getElementById("startBtn").addEventListener("click", function () {
    if (interval) return;

    interval = setInterval(function () {
        seconds++;
        updateDisplay();
    }, 1000);

    statusDisplay.textContent = "Status: Running";
});

document.getElementById("pauseBtn").addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    statusDisplay.textContent = "Status: Paused";
});

document.getElementById("resetBtn").addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateDisplay();
    statusDisplay.textContent = "Status: Reset";
});

document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "s") {
        document.getElementById("startBtn").click();
    }
    if (event.key.toLowerCase() === "p") {
        document.getElementById("pauseBtn").click();
    }
    if (event.key.toLowerCase() === "r") {
        document.getElementById("resetBtn").click();
    }
});