const apiKey = '68fa605697d4dd37daf30ea997199b49'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather_icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    
    if (response.status == 404) {
        document.querySelector('.city').innerHTML = 'Invalid name!'
        document.querySelector('.temp').innerHTML = '-'
        document.querySelector('.humidity').innerHTML = '-'
        document.querySelector('.wind').innerHTML = '-'
    } else {
        var data = await response.json()

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png'
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/Mist.png'
        }
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})