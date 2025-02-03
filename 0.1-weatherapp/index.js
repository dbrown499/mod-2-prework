const inputBox = document.getElementsByClassName("input-feild");
const weatherImage = document.getElementsByClassName("weather-image");
const searchButton = document.getElementsByClassName("search-button");
const firstpartOfApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
const lastpartOfApi = '&appid=7531f8e9246b5a2a4196135627537f6f&units=imperial';


searchButton[0].addEventListener('click', () => {
    let inputValue = (inputBox[0].value).toLowerCase().replace(/ /g, "%20");

    getApiAddress(inputValue);
});

function getApiAddress(name) {
    fetch(firstpartOfApi + `${name}` + lastpartOfApi)
        .then(response => response.json())
        .then(data => getWeather(data))
        .catch(error => console.error('Error:', error));

}


function getWeather(input) {
    console.log(input)
    const windSpeed = document.getElementsByClassName("wind");
    windSpeed[0].innerText = Math.round(input.wind.speed) + " km/h";

    const humidity = document.getElementsByClassName("humidity");
    humidity[0].innerText = Math.round(input.main.humidity) + "%";

    const name = document.getElementsByClassName("city");
    name[0].innerText = input.name;

    const degrees = document.getElementsByClassName("temp");
    degrees[0].innerText = Math.round(input.wind.deg) + "°c";

    if (input.weather[0].main == "Clouds") {
        weatherImage[0].src = "clouds-in-outline-icon-cloudy-weather-symbol-free-vector.png";
    } else if (input.weather[0].main == "Clear") {
        weatherImage[0].src = "Sunny-Icon-by-Kanggraphic-11.png";
    } else if (input.weather[0].main == "Rain") {
        weatherImage[0].src = "rain-icon-cloud-signs-storm-weather-symbol-raindrop-symbols-rainy-icons-black-color-isolated-sign-vector.png";
    } else if (input.weather[0].main == "Drizzle") {
        weatherImage[0].src = "download (1).png";
    } else if (input.weather[0].main == "Mist") {
        weatherImage[0].src = "fog-line-icon-weather-and-forecast-humidity-sign-vector-graphics-a-linear-pattern-on-a-white-background-eps-10-2MKB2GE.png";
    }

}
