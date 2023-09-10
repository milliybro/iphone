const stopBt = document.querySelector(".stop-alarm");
const playBt = document.querySelector(".play-alarm");
const audio = document.querySelector("audio");

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString("it-IT");
  console.log(time);
  if (time === "11:36:05") {
   console.log(time);
    audio.play(Infinity);
  }
}, 1000);

stopBtn.addEventListener("click", () => {
  audio.pause();
});

playBtn.addEventListener("click", () => {
  audio.play();
});
