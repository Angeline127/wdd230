// Hamburger button toggle menu
function toggleMenu() {
  document.querySelector("#navbar-details-2").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const menuButton = document.getElementById("hamburgerBtn");
menuButton.onclick = toggleMenu;


// Last modification
const date = new Date(document.lastModified).toLocaleString();

document.querySelector("#last-updated").innerHTML = date;

//Date
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  
  document.querySelector(".date").innerHTML = currentDate;
//Lazy loading
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 50px 0px"
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

//Fruit
const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const fruit1 = document.querySelector("#fruit1");
const fruit2 = document.querySelector("#fruit2");
const fruit3 = document.querySelector("#fruit3");
let fruits = [];

async function getFruits() {
    const response = await fetch(requestURL);
    fruits = await response.json();
    fruits.forEach(fruit => {
        displayFruit(fruit, fruit1);
        displayFruit(fruit, fruit2);
        displayFruit(fruit, fruit3);
    });
}

function displayFruit(fruit, parent) {
    // Create element to add
    let option = document.createElement('option');

    // set content
    option.textContent = `${fruit.name}`;

    // append content
    parent.appendChild(option);
}

getFruits();

//Weather Api
// API stuff
// select HTML elements in the document
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('.cloudy');
const humidity = document.querySelector('.humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=6bebf1caa2d153d51dfca5bcb5a26ff0';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {    
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const newdesc = desc.charAt(0).toUpperCase() + desc.slice(1);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', newdesc);
    captionDesc.textContent = newdesc;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}`;
}