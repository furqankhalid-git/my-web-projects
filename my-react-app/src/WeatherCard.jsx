function WeatherCard({ cityName, weather }) {
  return (
    <div className="weather-result">
      <h2>{cityName}</h2>
      <p className="temperature">{weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
    </div>
  );
}

export default WeatherCard;