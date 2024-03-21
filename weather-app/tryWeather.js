// https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=863242cfb2b1d357e6093d9a4df19a4b

// const apiKey = '863242cfb2b1d357e6093d9a4df19a4b';
const apiKey = '738a4a05515ef80b5a910354f66a63c';
// const apiUrl =
//   'https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore';

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  // console.log(data);
  console.log(`Location : ${data.name}`);
  console.log(`Coordinates : Lat ${data.coord.lon}  Lon ${data.coord.lat}`);
  console.log(`Temperature : ${data.main.temp}`);
  console.log(`Wind Speed ${data.wind.speed}`);
}
checkWeather();

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/weather-app (main)
// $ node tryWeather.js
// Location : Bengaluru
// Coordinates : Lat 77.6033  Lon 12.9762
// Temperature : 25.26
// Wind Speed 4.63
