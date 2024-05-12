const currentYear = new Date().getFullYear();
const currentyearelemnt = document.getElementById('currentyear');
const copyrightText = '&copy' + currentYear; 

currentyearelemnt.innerHTML = copyrightText;

const lastmodifiedTS = document.lastModified;
const lastmodifiedDate = new Date(lastmodifiedTS);
const formattedDate = lastmodifiedDate.toLocaleString();
const lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

const temperatureCelsius = 11;
const wind = 6;

const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

const windchillElement = document.getElementById('windchill')

if (temperatureCelsius <= 10 && wind > 4.8) {
    const windChill = 13.12 + (0.6215 * temperatureFahrenheit) - (11.37 * Math.pow(windSpeedMetersPerSecond, 0.16)) + (0.3965 * temperatureFahrenheit * Math.pow(windSpeedMetersPerSecond, 0.16));
    const windChillCelsius = (windChill - 32) * 5/9;
    windchillElement.textContent = ("Wind Chill:", windChillCelsius.toFixed(2), "°C")
} else {
    windchillElement.textContent = ("Wind Chill: N/A")
}