const inputBox = document.getElementsByClassName("input-feild");
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
    const windSpeed = document.getElementsByClassName("wind");
    windSpeed[0].innerText = Math.round(input.wind.speed) + " km/h";

    const humidity = document.getElementsByClassName("humidity");
    humidity[0].innerText = Math.round(input.main.humidity) + "%";

    const name = document.getElementsByClassName("city");
    name[0].innerText = input.name;

    const degrees = document.getElementsByClassName("temp");
    degrees[0].innerText = Math.round(input.wind.deg) + "°c";

}
