const Api_key = `0b9be67ce0a4c88f2b875a9e6f6cb199`;
const searchTemperature = () =>{
     const city = document.getElementById('city-name').value;
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
     fetch(url)
     .then(res=> res.json())
     .then( data => displayWeather(data));
     city.value= " ";

    //  console.log(url);
}
  const setInnerText=(id,text)=>{
   document.getElementById(id).innerText=text;
  }
const displayWeather = weather =>{
    // console.log(displayWeather);
    setInnerText('city', weather.name );
    setInnerText('temperature', weather.main.temp);
    setInnerText('condition', weather.weather[0].main);
    console.log(weather)
    // set weatherIcon
    const url=` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    const imgIcon=document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
   

}


