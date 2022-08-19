window.addEventListener("scroll", function() {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
})

const apikey = '4f0c5f237b428cfe861db9dc06e5875a'
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {origin: "cors"});
  const respData = await resp.json();

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">${temp}°C</h2>
    <small>${data.weather[0].main}</small>
  `;
  
  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(K) {
  return (K - 273.15).toFixed(1);
}

form.addEventListener('submit', (a) => {
  a.preventDefault();
  const city =search.value;
  if (city) {
    getWeatherByLocation(city);
  }
})

getWeatherByLocation("Paris");