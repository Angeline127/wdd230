@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


:root {
    /* PALETTE */
    --background-color: #F5F5F5;
    --primary-color: #463440;
    --secondary-color: #405B63;
    --accent-color: #D1F0DA;
    --accent-color-2: #E6F0D1;

    /* FONTS */
    --heading-font: 'Playfair Display', Helvetica, sans-serif;
    --text-font: 'Roboto', sans-serif;
}

h1,
h2,
h3 {
    font-family: 'Playfair Display', Helvetica, sans-serif;
    font-size: 50%;

}

ul li {
    font-family: 'Roboto', sans-serif;
    color: var(--primary-color);
}

/* heading */
.join-us {
    color: var(--background-color);
    font-size: 1.4rem;
    text-align: center;
    padding: 1px;
    margin: 0 1rem;
    border-top: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    border-bottom: 1px solid var(--background-color);
    border-right: 1px solid var(--background-color);
    background-color: var(--primary-color);
}

header {
    font-family: 'Playfair Display';
    color: #463440;
    background-color: #E6F0D1;
    padding: 1rem 0;
}

.head-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    flex-direction: row;
}

.head-content .logo-content {
    align-items: center;
    display: flex;
}

.logo-content img {
    width: 20%;
}

#head-h {

    justify-content: flex-start;
    display: flex;
    margin-left: 0.5rem;
    flex-direction: column;
}

#head-h h1 {
    font-size: 1.5rem;
    margin: 0;
}

#head-h h2 {
    font-size: 1.2rem;
    margin: 0;
}

/* nav */
.nav-m {
    padding-left: 1rem;
}

nav {
    margin-right: 1.6rem;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

nav ul li a {
    display: block;
    padding: .8rem 2vw;
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--primary-color);
}


/*a:hover,
a:active {
    border-bottom: 5px double;
}*/

nav ul li.active a {
    background-color: var(--background-color);
    color: #F5F5F5;
}

nav ul li a:hover {
    background-color: var(--background-color);
}

nav ul {
    display: none;
}

nav ul.open {
    display: block;
    text-align: left;
}


#hamburgerBtn {
    background-color: var(--primary-color);
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    font-size: 1.5rem;
    padding: 0.5em;
}

#hamburgerBtn span:nth-child(1) {
    display: block;
}

#hamburgerBtn span:nth-child(2) {
    display: none;
}

#hamburgerBtn.open span:nth-child(1) {
    display: none;
}

#hamburgerBtn.open span:nth-child(2) {
    display: block;
}


/* socials */
.socials {
    padding-right: 2rem;
    justify-content: end;
}

.socials img {
    width: 50px;
    align-items: flex-start;

}

.socials a:hover {
    border-bottom: none;
}

.date {
    background-color: var(--primary-color);
    color: var(--background-color);
    display: block;
    text-align: center;
    padding: 1px;
    margin: 0 1rem;
}



body {
    font-family: var(--text-font);
    position: relative;
}

p,
li {
    color: var(--background-color);
    font-family: var(--text-font);
    line-height: 1.4;
}

/* main */
main {
    color: var(--background-color);
    background-color: var(--primary-color);
    display: grid;
    grid-template-columns: 100%;
    height: 100%;
    grid-gap: 5px;
    gap: 0.8em;
    padding: 2em;
    /*padding: 0.5rem 0;*/
}




.event,
.weather,
.news,
.join,
.container-spot,
h2 {
    padding: .5em;
    font-size: 1.2rem;
}

.hero-div img {
    width: 100%;
    height: auto;

}

.hero {
    position: relative;
}

.welcome {
    color: var(--primary-color);
    text-shadow: 1px 1px var(--background-color);
    position: absolute;
    top: 3.2rem;
    left: 2.2rem;
    font-size: 1.8rem;
}

.join-kcc {
    position: absolute;
    bottom: 1em;
    right: 3.9em;
    font-size: 1.3rem;
    padding-top: .2rem;
    border-radius: 12px;
    border-color: #463440;
    opacity: 7.8;
    transition: 0.3s;
}

.join-kcc:hover {
    opacity: 0.8;
    background-color: var(--secondary-color);
    color: var(--background-color);
}

.join p {
    padding-top: 30px;
}

.hero h2 {
    position: relative;
    padding-top: 12px;
    font-size: 10px;
    padding-left: 12px;

}

.hero p {
    padding-left: 12px;
}


.news {
    position: relative;
    height: 102.5%;
}

.container-spot div {
    border: 1px solid var(--background-color);


    color: #F5F5F5;
}

.container-spot {
    display: grid;
    padding: 0.5rem;
}

.container-spot img {
    padding-top: 20px;
    padding-left: 70px;
    justify-content: center;


}

/** Thank You  **/
.thankyou-container {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 50vh;
}

.thankyou h2,
p {
    color: var(--primary-color);
    font-size: 1.5rem;
}

.thankyou p {
    color: #463440;
}

/** discover page **/
.discover {
    display: block;
}

.discover img {
    padding: 0.6rem;
}

.discover section {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
    justify-items: center;
}

.discover h1 {
    text-align: center;
    color: black;
    font-size: 30px;
    padding-bottom: 30px;
    text-shadow: #463440;
}

.discover h2 {
    padding: 1rem;
    text-align: center;
}

.dayBefore p {
    font-size: 2rem;
    font-weight: bolder;
}

.discover p {
    margin: auto 0;
    padding: 2rem;
    text-align: center;
    color: black;
}

/** Join Page **/
.join-container {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    color: #463440;
}

.join-container div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
}

.membership {
    display: flex;
    flex-direction: column;
    text-align: left;

}

.membership ul li {
    list-style-type: none;
    margin-top: 10px;
    text-align: left;
}


#joinUs {
    background-color: var(--primary-color);
    align-self: center;
    padding: 2em;
    text-align: left;
}

input,
select,
textArea {
    background-color: var(--accent-color-2);
    border-radius: 6px;
    border: 0;
    box-sizing: border-box;
    color: var(--primary-color);
    font-size: 18px;
    padding: 10px 20px;
    width: 100%;
}

label,
small {
    color: var(--background-color);
}

.submit {
    background-color: var(--accent-color-2);
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
}

/* Directory */
.directory {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.directory {
    padding-bottom: 5em;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid section,
.list section {
    background: var(--accent-color-2);
    border: 0.55em solid var(--primary-color);
    margin: 10px;
    padding: 10px;
    text-align: center;
    color: #463440;
}

.grid section p,
.list section p {
    text-align: left;
    color: #463440;
}

.grid section a,
.list section a {
    display: block;
    text-align: left;
    text-decoration: underline;
}

.grid img,
.list img {
    width: auto;
    box-shadow: 0 0 30px#716f6a;
}

.menu {
    margin: 1rem auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5rem 3em;
    background-color: var(--primary-color);
    text-align: center;
}

.menu p {
    color: var(--accent-color);
}

.menu button {
    margin: 0 10px;
    padding: 1em 3em;
}

.menu div {
    display: flex;
}

.list {
    display: flex;
    flex-direction: column;
}

.list section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}

.list section img {
    display: none;
}

/*** weather ***/
.weather h2 {
    padding-top: 30px;
    text-align: center;
    margin-bottom: 40px;

}

.weather-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    font-size: 2rem;
    font-weight: bold;
}

.degree-s {
    margin-right: 30px;
}

.box-center p {

    padding-top: 30px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
}

.box-bottom {
    border: none;
    border-top: 2px solid #F5F5F5;
}

.weather p {
    margin: 0;
}

.weather img {
    width: 50%;
    padding-left: 20px;

}

.joinBox {
    margin: 0 0.5rem;
}

/* footer */
footer {
    background-color: var(--primary-color);
    color: var(--background-color);
    text-align: center;
    padding: 1rem 0;
}

.main-footer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-details {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.footer-details div {
    display: flex;
    flex-direction: column;
}

.footer-details h3 {
    text-align: center;
    font-size: medium;
}

.footer p {
    margin: 0;
    text-align: center;
}

footer a {
    color: #F5F5F5;
}

.footer-details img {
    width: 120px;

}

.footer-details2 {
    border-top: 1px solid var(--secondary-color);
    margin-top: 1em;
}