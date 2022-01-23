function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;
    var bg = document.querySelector(".background");
    var allText = document.getElementsByClassName("colorText");

    if (minutes < 10) {
        time = hours + ":" + "0" + minutes;
    } else if (hours < 10) {
        time = "0" + hours + ":" + minutes;
    } else if (hours >= 12 || hours <= 5) {
        if (window.innerWidth < "1100" && window.innerWidth > "740") {
            bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/tablet/bg-image-nighttime.jpg')";    
        } else if (window.innerWidth < "740") {
            bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/mobile/bg-image-nighttime.jpg')";
        } else {
            bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/desktop/bg-image-nighttime.jpg')";
        }
    
        document.querySelector("#hello").innerText = "GOOD EVENING, IT’S CURRENTLY";
        document.querySelector("#icon").src = "assets/desktop/icon-moon.svg";
        document.querySelector(".popup").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        for(var i=0; i < allText.length; i++)
            {
            allText[i].style.color = "white";
            }
    } else {
        //bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)), url('assets/desktop/bg-image-daytime.jpg')";
        document.querySelector("#hello").innerText = "GOOD MORNING, IT’S CURRENTLY";
        document.querySelector("#icon").src = "assets/desktop/icon-sun.svg";
        document.querySelector(".popup").style.backgroundColor = "rgba(255, 255, 255, 0.75)";
        for(var i=0; i < allText.length; i++)
            {
            allText[i].style.color = "#303030";
            }
    }

    document.getElementById("time").innerText = time;
    setInterval(showTime, 60000);
}

showTime();

document.getElementById("btn").addEventListener("click", function() {  
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