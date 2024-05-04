import { useEffect, useState } from "react";
import SearchField from "./SearchField";
import Forecast from "./Forecast";
import Weather from "./Weather";

function Content() {
    const apiKey = import.meta.env.VITE_API_KEY;

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude.toString().slice(0, 5);
                let lon = position.coords.longitude.toString().slice(0, 5);
                Promise.all([
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`).then((response) => response.json()),
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`).then((response) => response.json()),
                ])
                    .then(([weather, forecast]) => {
                        setWeather(weather);
                        setForecast(forecast);
                        window.alert("Your location has been set automatically");
                        console.log(weather);
                        console.log(forecast);
                    })
                    .catch((error) => {
                        console.error("Could not fetch weather data:", error);
                    });
            });
        } else {
            console.log("Unable to retrieve your location");
        }
    }, [apiKey]);

    const handleSearch = (city) => {
        if (city === "") {
            document.getElementById("searchError").innerHTML = "Please enter a city name";
        } else {
            Promise.all([fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((response) => response.json()), fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`).then((response) => response.json())])
                .then(([weather, forecast]) => {
                    setWeather(weather);
                    setForecast(forecast);
                    console.log(weather);
                    console.log(forecast);
                })
                .catch((error) => {
                    console.error("Could not fetch weather data:", error);
                });
        }
    };
    return (
        <>
            <SearchField onSearch={handleSearch} />
            <Weather weather={weather} />
            <Forecast forecast={forecast} />
        </>
    );
}
export default Content;
