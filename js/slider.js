const View = document.querySelector('#slider-view');
const Carousel = document.querySelector('#slider-carousel');
const PrevBtn = document.querySelector('#slider-prev-btn');
const NextBtn = document.querySelector('#slider-next-btn');
const BulletsList = document.querySelectorAll('.slider__bullet-progress');

let basePos = 0;
let slideIndex = 1;
const totalSlides = 3;

function prevSlide() {
  if (slideIndex > 1) {
    slideIndex -= 1;
    basePos += View.offsetWidth;
    Carousel.style.left = `${basePos}px`;
  } else {
    slideIndex = totalSlides;
    basePos += -1 * (totalSlides - 1) * View.offsetWidth;
    Carousel.style.left = `${basePos}px`;
  }
  setActiveBullet();
}

function nextSlide() {
  if (slideIndex < totalSlides) {
    slideIndex += 1;
    basePos -= View.offsetWidth;
    Carousel.style.left = `${basePos}px`;
  } else {
    slideIndex = 1;
    basePos = 0;
    Carousel.style.left = `${basePos}px`;
  }
  setActiveBullet();
}

PrevBtn.addEventListener('click', prevSlide);

NextBtn.addEventListener('click', nextSlide);

function setActiveBullet() {
  BulletsList.forEach((el) => {
    el.classList.remove('slider__bullet_active');
  });
  BulletsList[slideIndex - 1].classList.add('slider__bullet_active');
}

setInterval(() => {
  nextSlide();
}, 5000);
