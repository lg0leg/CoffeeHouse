const body = document.querySelector('#body');
const nav = document.querySelector('#nav');
const burgerBtn = document.querySelector('#burger-btn');
const burgerLine1 = document.querySelector('#burger-line-1');
const burgerLine2 = document.querySelector('#burger-line-2');
const headerMenuLink = document.querySelector('#header-menu-link');

function toggleBurgerMenu() {
  body.classList.contains('no-scroll') ? body.classList.remove('no-scroll') : body.classList.add('no-scroll');
  nav.classList.contains('hidden') ? nav.classList.remove('hidden') : nav.classList.add('hidden');
  headerMenuLink.classList.contains('hidden') ? headerMenuLink.classList.remove('hidden') : headerMenuLink.classList.add('hidden');
  burgerLine1.classList.contains('header__burger-line-1_active') ? burgerLine1.classList.remove('header__burger-line-1_active') : burgerLine1.classList.add('header__burger-line-1_active');
  burgerLine2.classList.contains('header__burger-line-2_active') ? burgerLine2.classList.remove('header__burger-line-2_active') : burgerLine2.classList.add('header__burger-line-2_active');
}

burgerBtn.addEventListener('click', toggleBurgerMenu);
nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link') && document.body.offsetWidth <= 768) {
    toggleBurgerMenu();
  }
});
