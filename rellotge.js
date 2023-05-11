let endTimeInput = document.getElementById("end_time");
let setEndTimeButton = document.getElementById("set_end_time");
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let button = document.getElementById("start");
let remainingTimeElement = document.getElementById("remaining");
let clockElement = document.getElementById("clock");
let dateElement = document.getElementById("date");
let alarmElement = document.getElementById("alarm");

button.addEventListener("click", startTimer);
setEndTimeButton.addEventListener("click", setEndTime);

function startTimer() {
    let hours = +hoursInput.value;
    let minutes = +minutesInput.value;
    let seconds = +secondsInput.value;

    let totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

    let intervalId = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(intervalId);
            alarmElement.play();
            document.body.style.animation = "flash 1s infinite";
        } else {
            totalSeconds--;
            let remainingHours = pad(Math.floor(totalSeconds / 3600));
            let remainingMinutes = pad(Math.floor((totalSeconds % 3600) / 60));
            let remainingSeconds = pad(totalSeconds % 60);
            remainingTimeElement.textContent = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
        }
    }, 1000);
}


function setEndTime() {
    let endTime = new Date();
    let [hours, minutes, seconds] = endTimeInput.value.split(":");
    endTime.setHours(+hours);
    endTime.setMinutes(+minutes);
    endTime.setSeconds(+seconds);
    let now = new Date();

    let totalSeconds = Math.floor((endTime - now) / 1000);

    if (totalSeconds < 0) {
        alert("La hora seleccionada ja ha pasasat. Escull una hora futura.");
    } else {
        startCountdown(totalSeconds);
    }
}

function startCountdown(totalSeconds) {
    let intervalId = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(intervalId);
            alarmElement.play();
            document.body.classList.add("alarm");
        } else {
            totalSeconds--;
            let remainingHours = pad(Math.floor(totalSeconds / 3600));
            let remainingMinutes = pad(Math.floor((totalSeconds % 3600) / 60));
            let remainingSeconds = pad(totalSeconds % 60);
            remainingTimeElement.textContent = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
        }
    }, 1000);
}

setInterval(function() {
    let now = new Date();
    let days = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
    let months = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
    let dayOfWeek = days[now.getDay()];
    let dayOfMonth = pad(now.getDate());
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    dateElement.textContent = `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;

    let hours = pad(now.getHours());
    let minutes = pad(now.getMinutes());
    let seconds = pad(now.getSeconds());
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }


    
let themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function() {
    let body = document.body;
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});
    