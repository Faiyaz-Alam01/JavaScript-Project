const apiKey ='2f6b61f99b08901394e2bfef4ab4a6c3';

async function fetchWeather(city){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

        if(!response.ok){
            throw new Error('Unable to fetch weather data ');
        }
        const data = await response.json();
        // console.log(data);
        // console.log(data.main.temp);
        // console.log(data.name);
        // console.log(data.main.humidity);
        // console.log(data.visibility);
        // console.log(data.wind.speed);
        updateWeather(data);
    } catch (error) {
        console.error(error);
    }
}
const cityElement = document.querySelector('.city');
const temprature = document.querySelector(".temprature");
const windSpeed = document.querySelector('.wind-speed');
const humidity  = document.querySelector('.Humidity');
const visibility = document.querySelector('.visibility');
// fetchWeather();



function updateWeather(data){
    cityElement.textContent = data.name;
    temprature.textContent = `${Math.floor(data.main.temp)}°`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    visibility.textContent = `${data.visibility/100} km`;
}

const formEle = document.querySelector('.search-city');
const inputElement = document.querySelector('.city-input');
formEle.addEventListener('submit', function(e){
    e.preventDefault();

    const city = inputElement.value;

    if(city!=""){
       fetchWeather(city);
       inputElement.value = "";
    }
});