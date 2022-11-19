// const tC = 10;
// const skmH = 8.05;

// document.querySelector('.degrees').textContent = tC;
// document.querySelector('.speed').textContent = skmH;

// const tF = tC * (9/5) + 32;
// const smH = skmH / 1.609;

// if (tF <= 50 && smH > 3) { 
//   const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16);
//   document.querySelector('.wind').textContent = f.toFixed(2);
// }
// else {
//   document.querySelector('.wind').textContent = 'N/A';
// }


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const winds = document.querySelector('wind');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kumasi&units=imperial&appid=4831de6057d4fe27a81d6dd35aae65da';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}