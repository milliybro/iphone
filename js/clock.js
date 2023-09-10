const locationBtn = document.querySelector(".location");
const hoursRow = document.querySelector(".hours__row");
const localHours = document.querySelector(".local__hours");
const localDate = document.querySelector(".local__date");

let headerFirst =document.getElementsByClassName("header-first")

locationBtn.addEventListener("click", () => {
  location = "../index.html";

});   



// let time = new Date().toLocaleTimeString().slice(0, 10)

let hourInterval = setInterval(() => {
   let time = new Date().toLocaleTimeString().split(":", 5).join(":");
  localHours.innerHTML = time;
}, 1000);

let dates = new Date().toLocaleDateString()
localDate.innerHTML = dates


const hour =[
   {id:1, name: "Tashkent"},

]

function getHours({name}){
   return `
   <div class="hours">
   <h2>${name}</h2>
   </div>
   `
}

function getApplication() {
   hoursRow.innerHTML = "";
   hour.map((el) => {
      hoursRow.innerHTML += getHours(el);
   });
}

getApplication()
