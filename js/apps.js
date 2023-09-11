const appRow = document.querySelector(".app__row");
const first = document.querySelector(".header");
const clock = document.querySelector(".clock")

function getApp({ name, image, click }) {
  return `
   <div class="app">
      <div class="app-icon"><img src="${image}" class="icon" alt="${name}" onclick="${click}" ></div>
      <div class="app-name">${name}</div>
   </div>
   `;
}

function getApplication() {
  appRow.innerHTML = "";
  app.map((el) => {
    appRow.innerHTML += getApp(el);
  });
}

getApplication();


function openClock() {
   location.assign("pages/clock.html");
}


function openTimer() {
  location.assign("pages/timer.html");
}

function openAlarm() {
  location.assign("pages/alarm.html");
}

function openLotin() {
  location.assign("pages/lotin.html");
}

function openMusic() {
  location.assign("pages/music.html");
}