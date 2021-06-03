const search = document.querySelector('.search')
const input = document.querySelector('.input')
const weatherDiv = document.querySelector('.weather')
const cityName = document.querySelector('.city-name')
const temp = document.querySelector('.temp')

const toCelsius=(kelvin)=>{
    return  (kelvin - 273.15).toFixed(1)
}

const toKmPerHour = (speed)=>{
    return (speed*3.6).toFixed(1)
}

search.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e933e63cbe1c79cbe7e1844bf80fe3f0`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            cityName.innerHTML = `<img src="https://www.countryflags.io/${data.sys.country}/flat/64.png"> ${data.name}, ${data.sys.country}`
            temp.innerHTML = `
            <h1>${toCelsius(data.main.temp)} &#8451;</h1> 
            <p class='lead mt-3'>MIN: ${toCelsius(data.main.temp_min)} &#8451; | MAX: ${toCelsius(data.main.temp_min)} &#8451;</p>
            <p class='lead '>Humidity: ${data.main.humidity} %</p>
            <p class='lead '>Wind speed: ${toKmPerHour(data.wind.speed)} km/h</p>    
            `
        })
        input.value =''
})


console.log(toCelsius(298))