
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