export const imageNull = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';

export const monthSplit = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
export const msDay = 86400000;

export const errorMessages = {
  valueMissing: 'Это обязательное поле',
  tooShortPass: 'Минимум 8 символов',
  typeMismatch: 'Некорректный Email',
  tooShort: 'Должно быть от 2 до 30 символов',
};

export const objStatus = {
  statusLogin: 'Login',
  statusNoLogin: 'NoLogin',
  statusCardSave: 'CardSave',
};

// eslint-disable-next-line no-undef
export const page = document.querySelector('.page');
// eslint-disable-next-line no-undef
export const content = document.querySelector('.content');

export const count = 3;

export const cards = content.querySelector('.cards');
export const cardsArray = [];
export const searchButton = content.querySelector('.search__button');
export const searchInput = content.querySelector('.search__input');
export const searchField = content.querySelector('.search__field');
export const showMoreButton = content.querySelector('.news-result__button');
export const newsResult = content.querySelector('.news-result');
export const resultNotFound = content.querySelector('.result-not-found');

// Header
export const liSavedMessage = content.querySelector('.menu__li_saved_message');
export const liNoUser = content.querySelector('.menu__li_nouser');
export const liAuthButton = content.querySelector('.menu__li_auth');
export const userName = content.querySelector('.menu__button_auth_user');

// Мобильное меню
export const mobileMenu = content.querySelector('.mobile-menu');
export const headerNav = content.querySelector('.header__nav');
export const buttonClose = content.querySelector('.header__button-popup');
export const menu = content.querySelector('.menu');
export const menuNav = content.querySelector('.menu__nav');
export const menuLi = content.querySelectorAll('.menu__li');
export const menuLink = content.querySelector('.menu__link');
export const menuButton = content.querySelector('.menu__button');

// Попапы
export const popup = content.querySelector('.popup');
export const popupNameLink = content.querySelector('.popup__name_type_small');
export const popupErrorServerAuth = content.querySelector('.popup__error_server_auth');
export const popupErrorServerLogin = content.querySelector('.popup__error_server_login');

export const popupTypeLogin = content.querySelector('.popup_type_login');
export const formLogin = content.querySelector('#login');
export const openPopupLogin = content.querySelector('.menu__button_auth');
export const closePopupLogin = content.querySelector('.popup__close_login');
export const openLogin = content.querySelector('.popup__name-link_auth');

export const popupTypeRegistration = content.querySelector('.popup_type_auth');
export const formRegistration = content.querySelector('#auth');
export const openPopupRegistration = content.querySelector('.popup__name-link_login');
export const closePopupRegistration = content.querySelector('.popup__close_auth');
export const popupButtonRegistration = content.querySelector('.popup__button_auth');

export const popupTypeCorrectly = content.querySelector('.popup_type_correctly');
export const popupCloseCorrectly = content.querySelector('.popup__close_correctly');
export const popupButtonLogin = content.querySelector('.popup__button_login');
