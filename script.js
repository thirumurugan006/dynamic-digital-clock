/* DIGITAL CLOCK */
function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    document.getElementById("hours").innerText = String(h).padStart(2, '0');
    document.getElementById("minutes").innerText = String(m).padStart(2, '0');
    document.getElementById("seconds").innerText = String(s).padStart(2, '0');
    document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock();

/* STOPWATCH */
let swSeconds = 0;
let swTimer = null;

function startSW() {
    if (swTimer) return;
    swTimer = setInterval(() => {
        swSeconds++;
        displaySW();
    }, 1000);
}

function stopSW() {
    clearInterval(swTimer);
    swTimer = null;
}

function resetSW() {
    stopSW();
    swSeconds = 0;
    displaySW();
}

function displaySW() {
    let hrs = Math.floor(swSeconds / 3600);
    let mins = Math.floor((swSeconds % 3600) / 60);
    let secs = swSeconds % 60;

    document.getElementById("sw-time").innerText =
        `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

/* THEME TOGGLE */
function toggleTheme() {
    document.getElementById("clockBox").classList.toggle("dark");
}
