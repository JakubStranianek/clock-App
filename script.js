function showTime() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();

    var time = hours + ":" + minutes;
    document.getElementById("time").innerText = time;
    setInterval(showTime, 1000);
}

showTime();