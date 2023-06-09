/*---------------------------------

			SLOW SCROLL

---------------------------------*/

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		const href = this.getAttribute('href');
		const target = document.querySelector(href);
		const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
		const duration = 500;

		window.scrollTo({
			top: topOffset,
			behavior: 'smooth'
		});
	});
});






/*---------------------------------

			MENU-BURGER

---------------------------------*/
const headerMenu = document.querySelector("#header-menu");
const menuHamburger = document.querySelector("#menu-hamburger");
let scroll = false;

function showMenu() {
	headerMenu.classList.toggle("header__navigation--show");
	menuHamburger.classList.toggle("header__menu-btn--active");
	if (scroll) {
		document.body.style.overflowY = "unset";
		scroll = false;
	} else {
		document.body.style.overflowY = "hidden";
		scroll = true;
	}
}






/*---------------------------------

			FIELDS HANDLER

---------------------------------*/

const inputFields = document.querySelectorAll('.input');
const labels = document.querySelectorAll('.label');
const textarea = document.querySelector('#textarea');

inputFields.forEach((inputField, index) => {
	inputField.addEventListener('input', () => {
		if (inputField.value.length > 0) {
			labels[index].classList.add('label--active');
			inputFields[index].classList.add('input--active');
		} else {
			labels[index].classList.remove('label--active');
			inputFields[index].classList.remove('input--active');
		}
	});
});





/*---------------------------------

		SHOW LIST OF CURRENCY

---------------------------------*/


const sendList = document.querySelector("#send-list");
const getList = document.querySelector("#get-list");

function sendSelect() {
	sendList.classList.add('send__list-country--show');
}

function sendItem() {
	sendList.classList.remove('send__list-country--show');
}

function getSelect() {
	getList.classList.add('get__list-country--show');
}

function getItem() {
	getList.classList.remove('get__list-country--show');
}






/*---------------------------------

			CURRENCY API

---------------------------------*/

// just in case the API doesn't work
let currencies = {
	'CHF': 90,
	'KZT': 16,
	'USD': 80
};

// processing data in an asynchronous function
async function getExchangeRate(currency_1, currency_2) {
	const myHeaders = new Headers();
	myHeaders.append("apikey", "dSoCBz9kUvMOnIOTFvl2vBR2cStNrEvy");

	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders
	};

	// we prescribe the path, as well as indicate the currencies to get the conversion
	const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${currency_1}&base=${currency_2}`, requestOptions);
	const result = await response.json();
	return result;
}

// specify the currencies and set the value inside then
getExchangeRate('RUB', 'USD')
	.then(response => {
		currencies.USD = response.rates.RUB;
		usd.dataset.value = currencies.USD.toFixed(2);
		exchangeRate.textContent = `1.00 RUB = ${usd.dataset.value} USD`;
	})
	.catch(error => console.log('error', error));

getExchangeRate('RUB', 'CHF')
	.then(response => {
		currencies.CHF = response.rates.RUB;
		chf.dataset.value = currencies.CHF.toFixed(2);
	})
	.catch(error => console.log('error', error));

getExchangeRate('RUB', 'KZT')
	.then(response => {
		currencies.KZT = response.rates.RUB;
		kzt.dataset.value = currencies.KZT.toFixed(2);
	})
	.catch(error => console.log('error', error));






/*---------------------------------

			CALCULATOR

---------------------------------*/

// get references to all elements of the list
const usd = document.querySelector("#usd");
const chf = document.querySelector("#chf");
const kzt = document.querySelector("#kzt");

// adding click handlers to list items
function selectItem(currency) {
	let spanText = currency.querySelector('.get__item-span').textContent;
	course = currency.dataset.value;
	exchangeRate.textContent = `1.00 RUB = ${course} ${spanText}`;
	addImage(currency);
	getItem();
	divide = sendInput.value / course;
	getInput.value = divide.toFixed(2);
}


const getSpan = document.querySelector("#get-select");
// Create a new img element
const img = document.createElement('img');
// Create a new span element
const span = document.createElement('span');


// Function to add an image and text to a div element
function addImage(li) {
	// Remove all img and span tags from a div element
	getSpan.innerHTML = '';
	// Setting attributes for img
	img.setAttribute('src', li.querySelector('img').getAttribute('src'));
	img.setAttribute('alt', li.querySelector('img').getAttribute('alt'));
	img.setAttribute('class', 'get__selected-img');
	// Setting span attributes
	span.textContent = li.querySelector('.get__item-span').textContent;
	span.setAttribute('class', 'get__selected-span');
	// Add img and span to div element
	getSpan.appendChild(img);
	getSpan.appendChild(span);
}


/* calculate */

const sendInput = document.querySelector("#send-input");
const getInput = document.querySelector("#get-input");
const getLable = document.querySelector("#get-lable");
const exchangeRate = document.querySelector("#exchange-rate");
let course;
let divide;

sendInput.addEventListener("input", function () {
	// update the conversion rate when the send input is changed
	if (sendInput.value) {
		course = usd.dataset.value;
		divide = sendInput.value / course;
		getInput.value = divide.toFixed(2);
		getInput.classList.add('input--active');
		getLable.classList.add('label--active');
	} else {
		getInput.value = '';
		getInput.classList.remove('input--active');
		getLable.classList.remove('label--active');
	}
});

//get information about the current course
exchangeRate.textContent = `1.00 RUB = загружаем данные`;





/*---------------------------------

		EMBEDDING SVG IN HTML

---------------------------------*/


const divElement = document.getElementById('map');
// create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// specify the path to the map.svg file
xhr.open('GET', './img/svg/map.svg', true);

// set the response type to text
xhr.responseType = 'text';

// event handler for a successful request
xhr.onload = function () {
	// get the contents of the svg file
	const svgContent = xhr.response;

	// create a new svg element
	const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	// set the svg content to the svg element
	svgElement.innerHTML = svgContent;

	// add the svg element to the div element
	divElement.appendChild(svgElement);
};

// send the request
xhr.send();
