const menu = document.querySelector('.nav_list-wrap');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');

if (menu && burger) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	})

	document.querySelectorAll('.menu__link').forEach((link) => {
		link.addEventListener('click', () => {
			burger.classList.remove('active');
			menu.classList.remove('active');
			body.classList.remove('lock');
		})
	})
}