import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askCity = () => {
  rl.question('Enter city name: ', (city) => {
    getWeather(city);
  });
};

const getWeather = (city) => {
  const apiKey = '738a4a05515ef80b5a910354f66a63c';
  // 6
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
  fetch(apiUrl + `&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Location : ${data.name}`);
      console.log(`Coordinates : Lat ${data.coord.lon}  Lon ${data.coord.lat}`);
      console.log(`Temperature : ${data.main.temp}`);
      console.log(`Wind Speed ${data.wind.speed}`);
      rl.close();
    })
    .catch((error) => {
      console.error('Error fetching weather data: \n', error);
    });
};

askCity();
