function Weather({ weather }) {
    return weather ? (
        <div className="col-span-4 text-center border border-primary rounded-lg shadow-xl p-5">
            <div>
                <div className="inline-block">
                    <b>
                        <h1 id="cityName">
                            {weather.name}, {weather.sys.country}
                        </h1>
                    </b>
                    <div className="my-3">
                        <div className="flex justify-center align-center">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
                        </div>
                        <p id="temperature">{Math.round(weather.main.temp)}°C</p>
                        <p id="description">{weather.weather[0].description}</p>
                    </div>
                    <div className="flex justify-around">
                        <p>Feels Like: {weather.main.feels_like} °C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind speed: {weather.wind.speed} m/s</p>
                        <p>Pressure: {weather.main.pressure} hpa</p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="col-span-4 text-center border border-primary rounded-lg shadow-xl p-5">
            <p>Loading...</p>
        </div>
    );
}
export default Weather;
