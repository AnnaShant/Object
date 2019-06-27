'use strict'

//Валидация форм
$('.input-name').on('input invalid', function() {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity('Введите свое имя в формате: Александр')
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Имя введено не правильно, укажите данные в формате: Александр')
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: Александр')
  }
})

$('.input-phone').on('input invalid', function() {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity('Введите номер телефона: +7 909 000 33 33')
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Номер телефона введен не верно')
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите номер телефона: +7 909 000 33 33')
  }
})

$('.input-technique').on('input invalid', function() {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity('Введите марку и модель техники в формате: JCB JS220')
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: JCB JS220')
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: JCB JS220')
  }
})

$('.input-repairs').on('input invalid', function() {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity('Введите название узла ремонта в формате: Ковш')
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: Ковш')
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: Ковш')
  }
})

$('.input-hole').on('input invalid', function() {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity('Введите кол-во и размер отверстий в формате: 4 шт, диаметр 200')
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: 4 шт, диаметр 200')
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity('Данные введены не верно, укажите в формате: 4 шт, диаметр 200')
  }
})

//Мобильное меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navOver = document.getElementsByClassName('work__modal-overlay')[0];
var navLink1 = document.querySelector('.main-nav__link-1');
var navLink2 = document.querySelector('.main-nav__link-2');
var navLink3 = document.querySelector('.main-nav__link-3');
var navLink4 = document.querySelector('.main-nav__link-4');
var navLink5 = document.querySelector('.main-nav__link-5');
var navLink6 = document.querySelector('.main-nav__link-6');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navOver.style.display = 'block';
    $('body').css('overflow', 'auto');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navOver.style.display = 'none';
    $('body').css('overflow', 'auto');
  }
});

//Закрытие мобильного меню и overlay при на нажатии на кнопку меню

navLink1.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navOver.style.display = 'none';
  $('body').css('overflow', 'auto');
});

navLink2.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navOver.style.display = 'none';
  $('body').css('overflow', 'auto');
});

navLink3.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navOver.style.display = 'none';
  $('body').css('overflow', 'auto');
});

navLink4.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navOver.style.display = 'none';
  $('body').css('overflow', 'auto');
});

navLink5.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navOver.style.display = 'none';
  $('body').css('overflow', 'auto');
});

navLink6.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navOver.style.display = 'none';
  $('body').css('overflow', 'auto');
});

//Модальное окно с формой
var modalForm = document.getElementById('modalForm');
var formBtn = document.getElementsByClassName('btn__form-opened');
var formClose = document.getElementsByClassName('modal-form__close')[0];
var formOver = document.getElementsByClassName('modal-form__overlay')[0];

for (var i = 0; i < formBtn.length; i++) {
  formBtn[i].addEventListener('click', function() {
    openForm();
  });
}

formClose.addEventListener('click', closeForm);

function openForm() {
  modalForm.style.display = 'block';
  formOver.style.display = 'block';
  $('body').css('overflow', 'hidden');
}

function closeForm() {
  modalForm.style.display = 'none';
  formOver.style.display = 'none';
  $('body').css('overflow', 'auto');
}
