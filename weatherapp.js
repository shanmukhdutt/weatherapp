const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weatherImg=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description= document.querySelector('.description');
const humidity= document.getElementById('humidity');
const windSpeed=document.getElementById('wind-speed');
const locationNotFound=document.querySelector('.location-not-found');
const weatherBody=document.querySelector('.weather-body');
async  function checkWeather(city){

    const apiKey="2a331204c563d72b0269bc2f17c7c2bc";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const weatherData= await fetch(`${url}`).then(response=>response.json());
    if(weatherData.cod ===`404`){
        locationNotFound.style.display="flex";
        weatherBody.style.display="none";
        console.log("error");
        return;
    }
    console.log("run");
    locationNotFound.style.display="none";
    weatherBody.style.display="flex";
    temperature.innerHTML= `${Math.round(weatherData.main.temp-273.15)}°C`;
    description.innerHTML=`${weatherData.weather[0].description}`;
    humidity.innerHTML=`${weatherData.main.humidity}%`;
    windSpeed.innerHTML=`${weatherData.wind.speed}km/hr`;
    console.log(weatherData);
    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src="cloud.png";
            break;
        case 'Clear':
            weatherData.src="clear.png";
            break;    
        case 'Rain':
            weatherImg.src="rain.png";
            break;
        case 'Mist':
            weatherImg.src="mist.img";
            break;
        case 'Snow':
            weatherImg.src="snow.png";                
    }
    console.log(weatherData);
}


searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});