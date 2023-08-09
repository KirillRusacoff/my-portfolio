const mobileNav = document.querySelector('.nav-wrapper');
const navIcon = document.querySelector('.nav__icon-middle');
const block = document.querySelector ('.mobile-nav');

document.querySelector('.nav__icon--hidden').addEventListener('click', function () {
    navIcon.classList.toggle('nav__icon-middle--active');
    mobileNav.classList.toggle('nav-wrapper--active');
    block.classList.toggle('mobile-nav--active');
} );

const navLinks = document.querySelectorAll('.mobile-nav a');

navLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        mobileNav.classList.remove('nav-wrapper--active');
        block.classList.remove('mobile-nav--active');
        navIcon.classList.remove('nav__icon-middle--active');
    });
});

// Bactop arrow

const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function () {
	if (window.pageYOffset > 300) {
		backTopBtn.style.opacity = 1;
	} else {
		backTopBtn.style.opacity = 0;
	}
})