//Date
const currentDate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(new Date());

document.querySelector(".date").innerHTML = currentDate;

// Hamburger button toggle menu
function toggleMenu() {
  document.querySelector("#nav-info").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const menuButton = document.getElementById("hamburgerBtn");
menuButton.onclick = toggleMenu;

const date = new Date(document.lastModified).toLocaleString();

document.querySelector("#last-updated").innerHTML = date;


//greet us//
const day = new Date();
const today = day.getDay();

if (today < 1 || today > 2) {
  const banner = document.querySelector('.join-us');
  banner.remove();
}

//Lazy loading
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions= {
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

//Day Before//
let dayBefore = localStorage.getItem('date');

localStorage.setItem('date', day);

dayBefore = Date.parse(dayBefore);

const number_mSdayS = (day - dayBefore)/86400000;


if (!number_mSdayS) {
    const numDaysN = document.querySelector("#lastVisit");
    if (numDaysN) { numDaysN.textContent = 0; }
}

else {
    const numDaysY = document.querySelector("#lastVisit");
    if (numDaysY) numDaysY.textContent = number_mSdayS.toFixed(0);
}