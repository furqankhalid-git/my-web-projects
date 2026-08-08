import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState('');

  function searchWeather() {
    fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (!data.results) {
          alert("City not found");
          return;
        }
        setCityName(data.results[0].name + ", " + data.results[0].country);

        let lat = data.results[0].latitude;
        let lon = data.results[0].longitude;

        fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setWeather(data.current_weather);
          });
      });
  }

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter city name" value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={searchWeather}>Search</button>
      {weather && (
       <div className="weather-result">
        <h2>{cityName}</h2>
        <p className="temperature">{weather.temperature}°C</p>
        <p>Wind Speed: {weather.windspeed} km/h</p>
       </div>
)}
    </div>
  );
}



export default App;