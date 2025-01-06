const apiKey = "1f57cf750fb9328301dff32a8165efc4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            var data = await response.json();

            console.log(data);
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".mode").innerHTML = data.weather[0].main;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
            document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
            document.querySelector(".wind").innerHTML = data.wind.speed + ' kmph';

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "Weather_app_img/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "Weather_app_img/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "Weather_app_img/rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "Weather_app_img/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "Weather_app_img/mist.png"
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "Weather_app_img/snow.png"
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

        

}

searchButton.addEventListener("click", () => {
        checkWeather(searchBox.value);
});
