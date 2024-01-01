/* в этот файл добавляет скрипты*/
/* global L:readonly */
/* global Swiper:readonly */

// Page scripts
const mainNav = document.querySelector('.main-nav');
const menuToggle = mainNav.querySelector('.main-nav__menu-toggle');
const onToggleClick = () => {
  mainNav.classList.toggle('main-nav--close');
  mainNav.classList.toggle('main-nav--open');
};
mainNav.classList.remove('main-nav--nojs');
menuToggle.addEventListener('click', onToggleClick);


// Map
const pinTarget = {
  title: 'Интернет-магазин Drink2Go',
  lat: 59.968356,
  lng: 30.317568,
};

const map = L.map('map')
  .setView({
    lat: 59.968356,
    lng: 30.317568,
  }, 100);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

const markerIcon = L.icon({
  iconUrl: '../../raw/images/icons/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: pinTarget.lat,
    lng: pinTarget.lng,
  },
  {
    icon: markerIcon,
  }
);

marker
  .addTo(map)
  .bindPopup(
    createCustomPopup(pinTarget),
    {
      keepInView: true,
    },
  );

// Range
const range = document.querySelector('#filter-range');

noUiSlider.create(range, {
  range: {
    'min': 0,
    'max': 1000,
  },
  start: [0, 900],
  step: 1,
  behaviour: 'snap',
  tooltips: false,
  connect: true,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const inputMinNumber = document.querySelector('#min-price');
const inputMaxNumber = document.querySelector('#max-price');
const inputs = [inputMinNumber, inputMaxNumber];
range.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = values[handle];
});


inputs.forEach((input, handle) => {
  input.addEventListener('change', () => {
    range.noUiSlider.setHandle(handle, input.value);
  });
});

// Swiper
new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
