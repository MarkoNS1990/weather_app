(()=>{const e=document.querySelector(".search"),t=document.querySelector(".input"),n=document.querySelector(".city-name"),c=document.querySelector(".temp"),i=document.querySelector(".img"),o=document.querySelector(".info-text"),s=e=>(e-273.15).toFixed(1),a=e=>(9*(e-273.15)/5+32).toFixed(1);e.addEventListener("click",(()=>{fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t.value}&appid=e933e63cbe1c79cbe7e1844bf80fe3f0`).then((e=>e.json())).then((e=>{var t;console.log(e),n.innerHTML=`<img src="https://www.countryflags.io/${e.sys.country}/flat/64.png"> ${e.name}, ${e.sys.country}`,c.innerHTML=`<h1>${e.main.temp} K</h1>\n        <button class='fahrBtn'>Fahrenheits</button>\n        <button class='celsBtn'>Celsius</button>\n        <h1 class='fahr'>${a(e.main.temp)} F</h1>\n        <h1 class='cels'>${s(e.main.temp)} &#8451;</h1>\n            <p class='lead mt-3 cels'>MIN: ${s(e.main.temp_min)} &#8451; | MAX: ${s(e.main.temp_min)} &#8451;</p>\n            <p class='lead mt-3 fahr'>MIN: ${a(e.main.temp_min)} F | MAX: ${a(e.main.temp_min)} F</p>\n            <p class='lead '>Humidity: ${e.main.humidity} %</p>\n            <p class='lead '>Wind speed: ${t=e.wind.speed,(3.6*t).toFixed(1)} km/h</p>   \n            `;const l=document.querySelector(".fahrBtn"),r=document.querySelector(".celsBtn"),m=document.querySelectorAll(".fahr"),d=document.querySelectorAll(".cels");l.addEventListener("click",(()=>{m.forEach((e=>{e.style.display="block"})),d.forEach((e=>{e.style.display="none"}))})),r.addEventListener("click",(()=>{d.forEach((e=>{e.style.display="block"})),m.forEach((e=>{e.style.display="none"}))})),e.main.temp>300?(i.src="images/hot.jpg",o.innerText="It is hot outside, go for a swim!"):e.main.temp>290?(i.src="images/walk.jpg",o.innerText="It is nice outside, go for a walk!"):(i.src="images/cold.jpg",o.innerText="It is cold outside, dont go anywhere!")})).catch((()=>{c.innerText="Oops I didnt find your city! Please check if you typed it correctly."})),t.value=""}))})();