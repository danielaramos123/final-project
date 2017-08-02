  function videobackground() {
       var video = document.getElementById("videobackground");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
    }

    function restart() {
        var video = document.getElementById("videobackground");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("videobackground");
        video.currentTime += value;
    }

    function toggleHamburger(x) {
        x.classList.toggle("change");
        openNav()
    }

function openNav() {
    document.getElementById("nav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("nav").style.width = "0%";
}
