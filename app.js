let url1="http://universities.hipolabs.com/search?country=India";
let url=`https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=0fde24f18909b27ce870124bbcdf96d5`;
async function weather(){
    let city=document.querySelector("input").value;
    let temp=document.querySelector(".temp");
    let cityname=document.querySelector(".city");
    let humidity=document.querySelector(".hum");
    let wind=document.querySelector(".win");
    console.log(city);
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=0fde24f18909b27ce870124bbcdf96d5";
    console.log(url);
    const res=await fetch(url);
    const data = await res.json();
    console.log(data)
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    cityname.innerHTML=data.name;
    humidity.innerHTML="Humidity:"+data.main.humidity+"%";
    wind.innerHTML="Wind Speed:"+data.wind.speed+"km/h";
    console.log(data.weather[0].main);
    if(data.weather[0].main=="Mist"){
        document.querySelector('img').src="mist.png";
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector('img').src="clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        document.querySelector('img').src="clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector('img').src="drizzle.png";
    }
    else if(data.weather[0].main=="Haze"){
        document.querySelector('img').src="haze.png";
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector('img').src="rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector('.img').src="snow.png";
    }
}
let p=document.querySelector(".input-group-text");
p.addEventListener("click",weather);

