import { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");

  function searchWeather() {
    fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city)
      .then(response => response.json())
      .then(data => {
        let lat = data.results[0].latitude;
        let long = data.results[0].longitude;
        setCityName(data.results[0].name + ", " + data.results[0].country);
        return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`);
      })
      .then(response => response.json())
      .then(data => {
        setWeather(data.current_weather);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} searchWeather={searchWeather} />
      {weather && <WeatherCard cityName={cityName} weather={weather} />}
    </div>
  );
}

export default App;