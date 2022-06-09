// removing preloader when page load
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// selecting btns and video
const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener("click", function () {
  if (switchBtn.classList.contains("slide")) {
    switchBtn.classList.remove("slide");
    video.play();
  } else {
    switchBtn.classList.add("slide");
    video.pause();
  }
});
