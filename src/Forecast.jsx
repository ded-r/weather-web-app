function Forecast({ forecast }) {
    return (
        <div className="col-start-3 col-span-8 text-center border border-primary rounded-lg shadow-xl p-5">
            <h2>Weather Forecast for 5 days</h2>
            <div className="grid grid-cols-5 gap-4">
                {forecast ? (
                    forecast.list.map((item) => (
                        <div key={item.dt} className="border border-primary rounded-lg p-3">
                            <p>{item.dt_txt}</p>
                            <div className="flex justify-center align-center">
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather icon" />
                            </div>{" "}
                            <p>{Math.round(item.main.temp)}°C</p>
                            <p>{item.weather[0].description}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
export default Forecast;
