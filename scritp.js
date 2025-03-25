const apiKey = "8bc3654f474f0112f3961cef2669b214";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".btn");
const icon = document.querySelector(".weather-icon");

async function checkWeather(place) {
  const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  let temp = document.querySelector(".temp");
  let city = document.querySelector(".city");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");

  city.innerHTML = data.name;
  temp.innerHTML = `${Math.round(data.main.temp)}°c`;
  humidity.innerHTML = `${data.main.humidity} %`;
  wind.innerHTML = `${data.wind.speed} km/h `;

  if (data.weather[0].main == "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
