import React from "react";
import moment from "moment";

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
      <div className="row d-flex justify-content-center px-3">
        <div className="card">
          <div className="top">
            <p className="header">{weatherData.name}</p>
            <button className="button" icon="refresh" onClick={refresh}>
              Refresh
            </button>
          </div>

          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <p className="description">{weatherData.weather[0].main}</p>

          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
          <p className="temp">Humidity: {weatherData.main.humidity} %</p>

          <p className="sunrise-sunset">
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p className="sunrise-sunset">
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Weather;
