let timer;
let running = false;
let elapsedTime = 0;

function startStop() {
    try {
        if (running) {
            clearInterval(timer);
            running = false;
            document.getElementById('startStopBtn').innerText = 'Start';
        } else {
            timer = setInterval(updateTime, 1000);
            running = true;
            document.getElementById('startStopBtn').innerText = 'Stop';
        }
    } catch (error) {
        console.error("An error occurred in startStop function:", error);
    }
}

function reset() {
    try {
        clearInterval(timer);
        running = false;
        elapsedTime = 0;
        document.getElementById('display').innerText = '00:00:00';
        document.getElementById('startStopBtn').innerText = 'Start';
    } catch (error) {
        console.error("An error occurred in reset function:", error);
    }
}

function updateTime() {
    try {
        elapsedTime++;
        let hours = Math.floor(elapsedTime / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;
        document.getElementById('display').innerText = 
            (hours < 10 ? '0' + hours : hours) + ':' + 
            (minutes < 10 ? '0' + minutes : minutes) + ':' + 
            (seconds < 10 ? '0' + seconds : seconds);
    } catch (error) {
        console.error("An error occurred in updateTime function:", error);
    }
}