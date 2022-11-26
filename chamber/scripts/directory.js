const cards = document.querySelector('.container-spot');


// create variables for the cards
let card_1 = document.querySelector('spot-1')
let card_2 = document.querySelector('spot-2')
let card_3 = document.querySelector('spot-3')

let number = 0;
const request = './json/data.json';
fetch('./json/data.json')
    .then((response) => response.json())
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const directory = jsonObject['directory'];

        let filtered = directory.filter((d) => d.membershipLevel === "Gold" || d.membershipLevel === "Silver");
        
        filtered = filtered.sort(() => Math.random() - 0.5).slice(0, 3);
        
        filtered.forEach(dir => displayDirectory(dir));
        // directory.forEach((dir) => displayDirectory(dir));
    });

function displayDirectory(dir) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let image = document.createElement('img');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let membershipLevel = document.createElement('p')

    number = number + 1;


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
    card.appendChild(membershipLevel)

    // Add/append the existing HTML div with the cards class with the section(card)
    const divGrid = document.querySelector(`.spot-${number}`);
    if (divGrid) divGrid.appendChild(card);
}