fetch("https://api.open-meteo.com/v1/forecast?latitude=33.6844&longitude=73.0479&current_weather=true")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let temperature = data.current_weather.temperature;
        let windspeed = data.current_weather.windspeed;

        document.getElementById("weather").innerHTML = 
            "<p>Temperature: " + temperature + "°C</p>" +
            "<p>Wind Speed: " + windspeed + " km/h</p>";
    });