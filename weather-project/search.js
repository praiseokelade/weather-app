let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

let currentTime = document.querySelector("#current-date");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;

function enterCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector(".search-input");

  let h1 = document.querySelector(h1);
  h1.innerHTML = searchCity.value;
}

let searchCityForm = document.querySelector("#search-city-input");
searchCityForm.addEventListener("submit", enterCity);
