const headerTime = document.querySelector(".content__header-time");
const battery = document.querySelector(".battery")
const batteryLight = document.querySelector(".battery-charging")



let stopInterval = setInterval(() => {
   let time = new Date().toLocaleTimeString("it-IT").split(":", 2).join(":");
  headerTime.innerHTML = time;
}, 1000);


// let time = new Date().toLocaleTimeString("it-IT").split(":", 2).join(":")

navigator.getBattery().then((batteryObject) => {
   persent= ("Percentage", batteryObject.level)
  battery.innerHTML = `${persent*100}<span class="persent-battery">%</span>`
});

navigator.getBattery().then((batteryCharging) => {
  level= ("isCharging", batteryCharging.charging)
 if(level === true){
  batteryLight.innerHTML=`<img style="width:25px; height:25px;" src="../image/charging.png" alt="">`
  console.log(level);
  console.log(batteryCharging);
  
 }
  
});

