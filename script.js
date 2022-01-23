function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;
    
    if (minutes < 10) {
        time = hours + ":" + "0" + minutes;
    } else if (hours < 10) {
        time = "0" + hours + ":" + minutes;
    }

    document.getElementById("time").innerText = time;
    setInterval(showTime, 1000);
}

showTime();

document.getElementById("btn").addEventListener("click", function () {
    var first = document.getElementsByClassName("partOne")[0];

    if (first.style.display == "none") {
        first.style.display = "block";
        document.querySelector(".btn .active").classList.remove("active");
        document.querySelector(".btn div").classList.add("circle");
        document.querySelector(".popup").style.display = "none";
        document.querySelector(".partTwo").style.height = "280px";
        document.querySelector("button").innerText = "MORE";
    } else {
        first.style.display = "none";
        document.querySelector(".btn .circle").classList.remove("circle");
        document.querySelector(".btn div").classList.add("active");
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".partTwo").style.height = "260px";
        document.querySelector("button").innerText = "LESS";
    }
})

$(document).ready(function () {
    $(window).resize(function () {
        var bg = document.querySelector(".background");
        var date = new Date();
        var hours = date.getHours();
        var allText = document.getElementsByClassName("colorText");

        if (hours >= 13 || hours <= 5) {
            document.querySelector("#hello").innerText = "GOOD EVENING, IT’S CURRENTLY";
            document.querySelector("#icon").src = "assets/desktop/icon-moon.svg";
            document.querySelector(".popup").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            for (var i = 0; i < allText.length; i++) {
                allText[i].style.color = "white";
            }

            if ($(this).width() < 1100 && $(this).width() > 740) {
                bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/tablet/bg-image-nighttime.jpg')";
                bg.style.backgroundRepeat = "no-repeat";
                bg.style.backgroundSize = "cover";
            } else if ($(this).width() < 740) {
                bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/mobile/bg-image-nighttime.jpg')";
                bg.style.backgroundRepeat = "no-repeat";
                bg.style.backgroundSize = "cover";
            } else {
                bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/desktop/bg-image-nighttime.jpg')";
            }
        } else {
            document.querySelector("#hello").innerText = "GOOD MORNING, IT’S CURRENTLY";
            document.querySelector("#icon").src = "assets/desktop/icon-sun.svg";
            document.querySelector(".popup").style.backgroundColor = "rgba(255, 255, 255, 0.75)";
            for (var i = 0; i < allText.length; i++) {
                allText[i].style.color = "#303030";
            }
        }
    });
});