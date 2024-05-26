
const currentYear = new Date().getFullYear();
const currentyearelemnt = document.getElementById('currentyear');
const copyrightText = '&copy' + currentYear; 

currentyearelemnt.innerHTML = copyrightText;

const lastmodifiedTS = document.lastModified;
const lastmodifiedDate = new Date(lastmodifiedTS);
const formattedDate = lastmodifiedDate.toLocaleString();
const lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;


const products = [
    { name: "Product 1" },
    { name: "Product 2" },
    { name: "Product 3" }
];

const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});