const headerTime = document.querySelector(".content__header-time");
const battery = document.querySelector(".battery")



let stopInterval = setInterval(() => {
   let time = new Date().toLocaleTimeString("it-IT").split(":", 2).join(":");
  headerTime.innerHTML = time;
}, 1000);


// let time = new Date().toLocaleTimeString("it-IT").split(":", 2).join(":")

navigator.getBattery().then((batteryObject) => {
   persent= ("Percentage", batteryObject.level)
  battery.innerHTML = `${persent*100}<span class="persent-battery">%</span>`
});