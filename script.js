let progress = document.getElementById("progress");
let song = document.getElementById("song");
let CtrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPaues() {
  if (CtrlIcon.classList.contains("fa-pause")) {
    song.pause();
    CtrlIcon.classList.remove("fa-pause");
    CtrlIcon.classList.add("fa-play");
  } else {
    song.play();
    CtrlIcon.classList.remove("fa-play");
    CtrlIcon.classList.add("fa-pause");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onin = function () {
    song.currentTime = progress.value;
    song.play();
    CtrlIcon.classList.add("fa-pause");
    CtrlIcon.classList.remove("fa-play");
};
