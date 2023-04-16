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

			CURRENCY CONVERTER

---------------------------------*/

/* list-buttons */

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



/* передаём данные из списка */

const getSpan = document.querySelector("#get-select");

// получаем ссылки на все элементы списка
const usd = document.querySelector("#usd");
const chf = document.querySelector("#chf");
const kzt = document.querySelector("#kzt");

// добавляем обработчики кликов на каждый элемент списка
function selectItem(currency) {
	course = parseInt(currency.getAttribute("value"));
	exchangeRate.textContent = `1.00 RUB = ${course} KZT`;
	addImage(currency);
	getItem();
}



  // Функция для добавления картинки и текста в элемент div
  function addImage(li) {
    // Удаляем все теги img и span из элемента div
    getSpan.innerHTML = '';
    // Создаем новый элемент img
    const img = document.createElement('img');
    // Устанавливаем атрибуты для img
    img.setAttribute('src', li.querySelector('img').getAttribute('src'));
    img.setAttribute('alt', li.querySelector('img').getAttribute('alt'));
    img.setAttribute('class', 'get__selected-img');
    // Создаем новый элемент span
    const span = document.createElement('span');
    // Устанавливаем атрибуты для span
    span.textContent = li.querySelector('.get__item-span').textContent;
    span.setAttribute('class', 'get__selected-span');
    // Добавляем img и span в элемент div
    getSpan.appendChild(img);
    getSpan.appendChild(span);
  }



/* calculate */

const sendInput = document.querySelector("#send-input");
const getInput = document.querySelector("#get-input");
const getLable = document.querySelector("#get-lable");
const exchangeRate = document.querySelector("#exchange-rate");
let course = usd.value;

sendInput.addEventListener("input", function () {
	// устанавливаем значение input2 в значение input1
	if (sendInput.value) {
		getInput.value = sendInput.value * course;
		getInput.classList.add('input--active');
		getLable.classList.add('label--active');
	} else {
		getInput.value = '';
		getInput.classList.remove('input--active');
		getLable.classList.remove('label--active');
	}
});
