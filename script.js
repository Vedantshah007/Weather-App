const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8df36fce61mshbd3e4e2f25c80d8p1edda2jsnaaf88ac20d57',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (location) => {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + location, options)
    .then(response => response.json())
    .then((response) => {
        cityname.innerHTML=location;

        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;

        console.log(response)
    })
    .catch(err => console.error(err));

}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getweather(document.querySelector('input').value)
    document.querySelector('input').value = "";
})

let y = document.getElementById('name');

y.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
    e.preventDefault();
    getweather(document.querySelector('input').value)
    document.querySelector('input').value = "";
    }
})

getweather("Ahmedabad");