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



const instruments = [
	{
	  instumentFamily: "Strings",
	  available: "Violin, Viola, Cello, Doublebass",
	  description: "Made from wood, traditionally they have 4 strings that form parallel fifths, with the exception of the double bass. To play them it is customarily to use a 'bow'.",
	  imageUrl:
	  "images/strings.webp"
	},
	{
	  instumentFamily: "Woodwinds",
	  available: "Flute, Clarinet, Oboe",
	  description: "As the name says the woodwinds are made of wood and to play them air is used. Nowadays it's common to find metal flutes, and saxophones but traditionally they were also made of wood.",
	  imageUrl:
	  "images/woodwinds.webp"
	},
	{
	  instumentFamily: "Brass",
	  available: "Trumpet, Trombone, French Horn",
	  description: "Instruments made of metal, to play them air is used. Characteristic for having the same kind of mouthpiece, though they are diffirentiated for the size and shape.",
	  imageUrl:
	  "images/brass.webp"	
    },
	{
      instumentFamily: "Percussion",
      available: "Drums, Cymbals, Glockenspiell, Timpani, Claves, Snare",
      description: "Percussion is characterized for usually keeping the beat and having a lot of rythms, but it can also have melodies. There are two kinds of percussion it can either be tonal or pitchless. A big difference the perccussion has with all the other instruments is that percussionists learn how to play every instrument and during some pieces they play more than one instrument.",
      imageUrl:
      "images/percussion.webp"
	},
	
];

function createCards(dataArray) {
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
        title.textContent = item.instumentFamily;

		const available = document.createElement('p');
        available.textContent = `Available Instruments: ${item.available}`;


		const description = document.createElement('p');
        description.textContent = `Description: ${item.description}`;

		
		card.appendChild(title);
		card.appendChild(img);
		card.appendChild(available);
        card.appendChild(description);
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

function filterCards(filter) {
	if (filter === 'all') {
		createCards(instruments);
	} else if (filter === 'instruments') {
		const instrumentOnly = instruments.map(inst => ({
			instumentFamily: inst.instumentFamily,
			instrumentsAvailable: inst.instrumentsAvailable,
			description: inst.description,
			imageUrl: inst.imageUrl
		}));
		createCards(instrumentOnly);
	} else if (filter === 'classes') {
		// Assuming 'classes' means we only want the description and the image
		const classOnly = instruments.map(inst => ({
			instumentFamily: inst.instumentFamily,
			description: inst.description,
			imageUrl: inst.imageUrl
		}));
		createCards(classOnly);
	}
}

createCards(instruments);
