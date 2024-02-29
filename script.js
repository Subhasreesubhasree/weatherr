    const apiKey="2f722cb503a140d0f8a8ae16a21b70c0";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


    const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");

    const weathericon=document.querySelector(".weather-icon");

    async function checkweather(city){
        const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
        if(response.status==404){

            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
        var data = await response.json();
        console.log(data);
    }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".windspeed").innerHTML=data.wind.speed+" km/hr";
    document.querySelector(".visibility").innerHTML=data.visibility+" m";
    document.querySelector(".pressure").innerHTML=data.main.pressure+" hPa";

    if(data.weather[0].main=="cloudy"){
        weathericon.src="images/cloudy.png";
    }
    else if(data.weather[0].main=="clear"){
        weathericon.src="images/clear.png";
    }
    else if(data.weather[0].main=="rain"){
        weathericon.src="images/rain.png";
    }
    else if(data.weather[0].main=="drizle"){
        weathericon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="mist"){
        weathericon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    }
    searchbtn.addEventListener("click",()=>{
        checkweather(searchbox.value);
    });
    checkweather();