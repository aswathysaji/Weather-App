let API_KEY = "b42fa5f1bd33f3f58f0380cd2f772f7a";

getWeatherData = (city) => {

    const URL = "https://api.openweathermap.org/data/2.5/weather";
    
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) =>{
        return response.json();
    })
}


searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city).then((response)=>{
        console.log(response);
        showWeatherData(response);
    }).catch((error)=>{
        console.log(error);
    })
}

showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('min-temp').innerText = weatherData.main.temp_min;
    document.getElementById('max-temp').innerText = weatherData.main.temp_max;
}