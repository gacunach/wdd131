
const currentYear = new Date().getFullYear();
const currentyearelemnt = document.getElementById('currentyear');
const copyrightText = '&copy' + currentYear; 

currentyearelemnt.innerHTML = copyrightText;

const lastmodifiedTS = document.lastModified;
const lastmodifiedDate = new Date(lastmodifiedTS);
const formattedDate = lastmodifiedDate.toLocaleString();
const lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Santiago Chile",
		location: "Providencia, Santiago, Chile",
		dedicated: "1983, September, 15",
		area: 20831,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg"
	},
	{
		templeName: "Laie Hawaii",
		location: "Laie, Hawaii, United States",
		dedicated: "1919, November, 27",
		area: 42100,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
	},
	{
		templeName: "Concepción Chile",
		location: "Concepción, Chile",
		dedicated: "2018, October, 28",
		area: 23095,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
	}
];

function createCards(dataArray) {
	container.innerHTML = '';
	const container = document.getElementById("cards")

	dataArray.forEach(item => {
		const card = document.createElement("div");
		card.className = "card";

		const img = document.createElement("img")
		img.className = "lazy";
		img.setAttribute("data-src", item.imageUrl);
		img.setAttribute("loading", "lazy")
		img.alt = item.title;

        const title = document.createElement('h3');
        title.textContent = item.templeName;

		const location = document.createElement('p');
        location.textContent = `Location: ${item.location}`;


		const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${item.dedicated}`;

		const area = document.createElement('p');
        area.textContent = `Area: ${item.area} sq ft`;
		
		card.appendChild(title);
		card.appendChild(img);
		card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
		container.appendChild(card);
	});
	applyLazyLoading();
}
function applyLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');

    lazyImages.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
    });
}




function filterOld() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}

function filterNew() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}

function filterLarge() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmall() {
    return temples.filter(temple => temple.area < 10000);
}

document.getElementById('home').addEventListener('click', () => createCards(temples));
document.getElementById('old').addEventListener('click', () => createCards(filterOld()));
document.getElementById('new').addEventListener('click', () => createCards(filterNew()));
document.getElementById('large').addEventListener('click', () => createCards(filterLarge()));
document.getElementById('small').addEventListener('click', () => createCards(filterSmall()));

createCards(temples);

