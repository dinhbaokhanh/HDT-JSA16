const searchInput = document.getElementById("search-input");

const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");


const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");


searchInput.addEventListener("change", (event) => {
    // fetch(): Phương thức mặc định của Javascript để Gọi API từ Server của web khác về
    // web mình.
  
    console.log(event.target.value);
    // In ra dữ liệu mình nhập vào.
  
    /// Kéo dữ liệu từ WEB Openweathermap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&lang=vi&units=metric `)
      .then(async function (response) {
        const data = await response.json();
  
        console.log(data);
        cityName.innerHTML = data.name;
        weatherState.innerHTML = data.weather[0].description
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        temperature.innerHTML = Math.round(data.main.temp);
  
      })
    // .then(data => console.log(data));
  
  })