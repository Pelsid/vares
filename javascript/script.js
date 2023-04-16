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

inputFields.forEach((inputField, index) => {
  inputField.addEventListener('input', () => {
    if (inputField.value.length > 0) {
      //labels[index].style.display = 'block';
	  labels[index].classList.add('label--active');
	  inputFields[index].classList.add('input--active');
    } else {
      //labels[index].style.display = 'none';
	  labels[index].classList.remove('label--active');
	  inputFields[index].classList.remove('input--active');
    }
  });
});