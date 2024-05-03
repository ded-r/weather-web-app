import { useEffect, useState } from "react";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SearchField from "./SearchField";
import Forecast from "./Forecast";
import Weather from "./Weather";

function Content() {
    const apiKey = import.meta.env.VITE_API_KEY;
    let lat = "";
    let lon = "";

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                console.log("Geolocation not supported");
            }
        }
    }, []);

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

    function success(position) {
        lat = position.coords.latitude.toString().slice(0, 5);
        lon = position.coords.longitude.toString().slice(0, 5);
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
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    return (
        <>
            <SearchField onSearch={handleSearch} />
            <Weather weather={weather} />
            <Forecast forecast={forecast} />
        </>
    );
}
export default Content;
