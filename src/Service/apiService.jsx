function apiService() {
    Promise.all([fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`).then((response) => response.json()), fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${API_KEY}`).then((response) => response.json())]).then(([weatherData, forecastData]) => {
        setWeather(weatherData);
        setForecast(forecastData);
    });
}
