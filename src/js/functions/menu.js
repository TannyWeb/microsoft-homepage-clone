export const menu = () => {
	const menuBtn = document.querySelector('.hamburger-menu');
	const ul = document.querySelector('.nav__ul');

	menuBtn.addEventListener('click', () => {
		ul.classList.toggle('show');
	});
};
