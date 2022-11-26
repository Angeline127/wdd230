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

//Last Visit//
let dayBefore = localStorage.getItem('date');

localStorage.setItem('date', day);

dayBefore = Date.parse(dayBefore);

const number_mSdayS = (day - dayBefore) / 86400000;


if (!number_mSdayS) {
  const numDaysN = document.querySelector("#lastVisit");
  if (numDaysN) { numDaysN.textContent = 0; }
}

else {
  const numDaysY = document.querySelector("#lastVisit");
  if (numDaysY) numDaysY.textContent = number_mSdayS.toFixed(0);
}
//Thank You //

//Directory //
const cards = document.querySelector('.cards');
const getDirectoryList = async () => {
    let directList = [];
    await fetch('./json/data.json')
        .then((response) => response.json())
        .then((data) =>
            data.directory.forEach((directs) => {
                displayDirectory(directs);
                directList.push(directs);
            })
        );

    // Selects 3 random business with gold/silver status
    const randomSpot = getRandom(
        directList.filter(
            (directs) =>
                directs.membershipLevel === 'Gold' ||
                directs.membershipLevel === 'Silver'
        ),
        3
    );

    randomSpot.forEach((a) => displaySpot(a));
};

getDirectoryList();

function getRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

function displayDirectory(dir) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');

  // Change the textContent property of the h2 element
  if (h2) h2.textContent = dir.name;
  if (address) address.textContent = ` ${dir.address}`;
  if (phoneNumber) phoneNumber.textContent = ` ${dir.phoneNumber}`;
  if (website) {
    website.textContent = dir.website;
    website.href = dir.website;
  }

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', dir.imgUrl);
  image.setAttribute('alt', `${dir.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  const divGrid = document.querySelector('div.grid');
  if (divGrid) divGrid.appendChild(card);
}

//Grid //
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#business');

if (gridbutton) {
  gridbutton.addEventListener('click', () => {
    // example using arrow function
    if (display) {
      display.classList.add('grid');
      display.classList.remove('list');
    }
  });
}

if (listbutton) listbutton.addEventListener('click', showList);

function showList() {
  if (display) {
    display.classList.add('list');
    display.classList.remove('grid');
  }
}


// Displays directory spotlight
function displaySpot(dir) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');
  let membershipLevel = document.createElement('p')

  // Change the textContent property of the h2 element 
  if (h2) h2.textContent = dir.name;
  if (address) address.textContent = ` ${dir.address}`;
  if (phoneNumber) phoneNumber.textContent = ` ${dir.phoneNumber}`;
  if (website) {
      website.textContent = dir.website;
      website.href = dir.website;
  }
  if (membershipLevel) membershipLevel.textContent = ` ${dir.membershipLevel}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', dir.imgUrl);
  image.setAttribute('alt', `${dir.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);
  card.appendChild(membershipLevel);

  // Add/append the existing HTML div with the cards class with the section(card)
  const divGrid = document.querySelector('.container-spot');
  if (divGrid) divGrid.appendChild(card);
}

