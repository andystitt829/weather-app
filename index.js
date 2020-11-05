var myKey = config.API_KEY;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=' + myKey + '&units=imperial';

fetch(url)
.then(response => response.json())
.then(function(data) {
    let degrees = data.main.temp;
    document.getElementById('degrees').innerHTML = degrees;
})