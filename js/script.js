const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('lock');
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		burger.classList.remove('active');
		menu.classList.remove('active');
		document.body.classList.remove('lock');
	})
})

