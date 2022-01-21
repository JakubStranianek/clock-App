function showTime() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();

    var time = hours + ":" + minutes;

    if (minutes < 10) {
        time = hours + ":" + "0" + minutes;
    } else if (hours < 10 ) {
        time = "0" + hours + ":" + minutes;
    }

    document.getElementById("time").innerText = time;
    setInterval(showTime, 1000);
}

showTime();

document.getElementById("btn").addEventListener("click", function() {  
    var first = document.getElementsByClassName("partOne")[0];
    
    if (first.style.display == "none") {
        first.style.display = "block";
        document.querySelector(".btn .active").classList.remove("active");    
        document.querySelector(".btn div").classList.add("circle");
        document.querySelector(".popup").style.display = "none";
    } else {
        first.style.display = "none";
        document.querySelector(".btn .circle").classList.remove("circle");    
        document.querySelector(".btn div").classList.add("active");
        document.querySelector(".popup").style.display = "flex";
    }
}) 