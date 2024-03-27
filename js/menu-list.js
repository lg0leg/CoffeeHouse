const coffeeBtn = document.querySelector('#coffee-btn');
const teaBtn = document.querySelector('#tea-btn');
const dessertBtn = document.querySelector('#dessert-btn');
const switchTypeBtns = document.querySelectorAll('.menu__switch-tab-btn');
let menuType = 'coffee';
const menuContainer = document.querySelector('#menu-container');
let products;
const addItemsBtn = document.querySelector('#add-items-btn');

coffeeBtn.addEventListener('click', () => {
  menuType = 'coffee';
  switchTypeBtns.forEach((el) => {
    el.classList.remove('menu__switch-tab-btn_active');
  });
  coffeeBtn.classList.add('menu__switch-tab-btn_active');
  setMenu(menuType);
});

teaBtn.addEventListener('click', () => {
  menuType = 'tea';
  switchTypeBtns.forEach((el) => {
    el.classList.remove('menu__switch-tab-btn_active');
  });
  teaBtn.classList.add('menu__switch-tab-btn_active');
  setMenu(menuType);
});

dessertBtn.addEventListener('click', () => {
  menuType = 'dessert';
  switchTypeBtns.forEach((el) => {
    el.classList.remove('menu__switch-tab-btn_active');
  });
  dessertBtn.classList.add('menu__switch-tab-btn_active');
  setMenu(menuType);
});

async function getProducts() {
  const res = await fetch('./js/products.json');
  products = await res.json();

  setMenu('coffee');
}

getProducts();

function setMenu(type) {
  menuContainer.innerHTML = '';

  if (document.documentElement.clientWidth <= 768 && products.filter((el) => el.category == type).length > 4) {
    addItemsBtn.classList.remove('hidden');
    menuContainer.classList.add('menu__tab-hidden');
  } else {
    addItemsBtn.classList.add('hidden');
    menuContainer.classList.remove('menu__tab-hidden');
  }

  products
    .filter((el) => el.category == type)
    .forEach((el, idx) => {
      renderCard(el, idx);
    });
}

function renderCard(el, idx) {
  const card = document.createElement('article');
  card.classList.add('menu__card');
  card.innerHTML = `<div class="card__img-wrapper">
  <img src="./assets/img/menu/${el.category}-${idx + 1}.png" alt="${el.category} foto" class="card__img" width="340" height="340">
  </div>
  <div class="card__description">
  <h3 class="h3">${el.name}</h3>
  <p class="tmedium">${el.description}</p>
  <p class="h3">$${el.price}</p>
  </div>`;
  menuContainer.appendChild(card);
}

addItemsBtn.addEventListener('click', () => {
  addItemsBtn.classList.add('hidden');
  menuContainer.classList.remove('menu__tab-hidden');
});

window.addEventListener('resize', () => {
  setMenu(menuType);
});
