const api_key = "41fdd1dab69ab04dd2bf3a7165684767";

const weatherData= document.getElementById("weather-data");

const cityInput = document.getElementById("city");

const formHandler = document.querySelector("form");

formHandler.addEventListener("submit",(event)=>{
    event.preventDefault();
    const getCityValue = cityInput.value;
    // console.log(getCityValue);
    getWeatherData(getCityValue);

});
//using function and api to fetch the weather data
async function getWeatherData(getCityValue){
    //using try and catch to see if theres any error
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCityValue}&APPID=${api_key}&units=metric`);
        if(!response.ok){
            throw new Error("Network response was not ok!");
        }
        const data = await response.json();
             console.log(data);
        const temperate = math.round(data.main.temp);
        const descript = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`
        ];
        weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="sun's image" srcset="">`;
        weatherData.querySelector(".temperature").textContent = `${temperate}°C`;
        weatherData.querySelector(".description").textContent = descript;
        weatherData.querySelector(".details").innerHTML = details.map((details)=>
        `<div>${details}</div>`).join("");
    }

    catch(error){
        weatherData.querySelector(".icon").innerHTML = " ";
        weatherData.querySelector(".temperature").textContent = " ";
        weatherData.querySelector(".description").textContent = "An error occured, please try again later";
        weatherData.querySelector(".details").innerHTML = "";
    }
};
