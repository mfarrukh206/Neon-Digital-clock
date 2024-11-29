const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
    var now = new Date();

    // Update time
    document.getElementById("time").innerText = 
        zeroPadding(now.getHours(), 2) + ":" + 
        zeroPadding(now.getMinutes(), 2) + ":" + 
        zeroPadding(now.getSeconds(), 2);

    // Update date
    document.getElementById("date").innerText = 
        now.getFullYear() + "-" + 
        zeroPadding(now.getMonth() + 1, 2) + "-" + 
        zeroPadding(now.getDate(), 2) + " " + 
        WEEK[now.getDay()];
}

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}

updateTime();
setInterval(updateTime, 1000);