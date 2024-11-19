document.getElementById('getWeather').addEventListener('click', function() {
    console.log("test");
    var city = document.getElementById('x1').value;
    var apiKey = '36e1575e4dd4d02d3fee92c6c81679dc'; 
   

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('get', url, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var weatherDiv = document.getElementById('weather');
            
                var data = JSON.parse(xmlhttp.responseText);
                console.log(data);
                // console.log(data.cod);
                if (data.cod === 200) {
                    document.getElementById('weather-city').innerHTML = `${data.name}, ${data.sys.country}`;
                    document.getElementById('weather-temp').innerHTML = `Temperature: ${data.main.temp} °C`;
                    document.getElementById('weather-desc').innerHTML = `Weather: ${data.weather[0].description}`;
                    document.getElementById('weather-humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
                    document.getElementById('weather-wind').innerHTML = `Wind Speed: ${data.wind.speed} m/s`;

                    var iconcode = data.weather[0].icon;
                    console.log(iconcode);
                    var iconUrl = `http://openweathermap.org/img/wn/${iconcode}@2x.png`;
                    console.log(iconUrl);
                    var weatherIcon = document.getElementById('weather-icon');
                    weatherIcon.src = iconUrl;
                    weatherIcon.style.display = 'block';

                } 
                // else if(data.cod == 404){
                //     weatherDiv.innerHTML = `<p>Failed to Get weather Information.</p>`;

                // }
            } 
            else if(xmlhttp.status == 404){
                document.querySelector(".error").innerHTML = `<p>Invalid city</p>`;
               
            }
         
            
            // else {
            //     weatherDiv.innerHTML = `<p>Failed to Get weather Information.</p>`;
        // }
        
    };
   
    xmlhttp.send();
});
