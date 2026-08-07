document.getElementById("searchBtn").addEventListener("click", function() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (!data.results) {
                document.getElementById("weather").innerHTML = "<p>City not found</p>";
                return;
            }

            let lat = data.results[0].latitude;
            let lon = data.results[0].longitude;
            let cityName = data.results[0].name;
            let country = data.results[0].country;

            document.getElementById("cityName").innerHTML = cityName + ", " + country;

            fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true")
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
        });
});