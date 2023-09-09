let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
const week = document.querySelector(".week");
const day = document.querySelector(".day");
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
  
      // API URL
      const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;
  
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          // let icon1 = data.weather[0].icon;
          // icon.innerHTML = 
          //     `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
        });
    });
  }
});

//week and day
let date = new Date();
let weekSelect = date.toDateString().split(" ")[0];
let dateSelect = date.toDateString().split(" ")[2];
if(weekSelect === "Sat"){
  weekSelect = "Saturday";
} else if(weekSelect === "Sun"){
  weekSelect = "Sunday";
} else if(weekSelect === "Mon"){
  weekSelect = "Monday";
} else if(weekSelect === "Tue"){
  weekSelect = "Tuesday";
} else if(weekSelect === "Wed"){
  weekSelect = "Wednesday";
} else if(weekSelect === "Thu"){
  weekSelect = "Thursday";
} else if(weekSelect === "Fri"){
  weekSelect = "Friday";
}

week.innerHTML = weekSelect
day.innerHTML = dateSelect
console.log(date);