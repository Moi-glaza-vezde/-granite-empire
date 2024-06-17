const burgerMenu = document.getElementById('burgerMenu');
const nav = document.getElementById('nav');
const closeNav = document.getElementById('closeNav');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.header__nav-item');
const gelleryItem = document.querySelectorAll('.gallery__item');
const galleryBox = document.getElementById('galleryBox');
const closePhoto = document.querySelector('#closePhoto');

//анимация при загрузки
//настройка
let option = {
   root: null,
   rootMargis: '5px',
   threshold: 0.5,
};
// функция обратного вызова
let callback = function (entries, observer) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('active');
      }
   });
};

let observer = new IntersectionObserver(callback, option);
let targets = document.querySelectorAll('.anim');

targets.forEach((target) => {
   observer.observe(target);
});

console.log(targets);
// меню бургер
burgerMenu.addEventListener('click', function () {
   nav.classList.add('header__nav-list--active');
   body.classList.add('dont-scroll');
});
closeNav.addEventListener('click', function () {
   nav.classList.remove('header__nav-list--active');
   body.classList.remove('dont-scroll');
});

navItems.forEach(function (item) {
   item.addEventListener('click', function () {
      nav.classList.remove('header__nav-list--active');
      body.classList.remove('dont-scroll');
   });
});

closePhoto.addEventListener('click', function () {
   gelleryItem.forEach(function (item) {
      item.classList.remove('gallery__item--active');
   });
   closePhoto.style.display = 'none';
});

gelleryItem.forEach(function (items) {
   items.addEventListener('click', function () {
      gelleryItem.forEach(function (item) {
         item.classList.remove('gallery__item--active');
      });

      items.classList.add('gallery__item--active');
      items.classList.add('order');

      if (items.closest('.gallery__item--active')) {
         console.log(55);
         closePhoto.style.display = 'block';
      }
   });
});
