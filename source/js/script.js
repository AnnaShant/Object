'use strict'

//Слайдер в блоке "Услуги"
$(document).ready(function(){
  $('#services').slick({
     dots: false,
     arrows: false,
     infinite: false,
     speed: 300,
     slidesToShow: 1,
     adaptiveHeight: true,
     variableWidth: true,
     swipe: false,
     draggable: false,
     responsive: [
      {
      breakpoint: 1366,
      settings: {
        swipe: true,
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: 1024,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
 });

//Валидация форм
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

//Заявка принята
var modal1 = document.getElementById('modalConfirmation');
var modalPresent = document.getElementById('modalPresent');
var myBtn1 = document.getElementsByClassName('btn__opened-1');
var BtnPresent = document.getElementsByClassName('btn__present');
var close1 = document.getElementsByClassName('modal__close-1')[0];
var closeCheck = document.getElementsByClassName('btn__modal')[0];
var closePresent = document.getElementsByClassName('modal__close-3')[0];
var over1 = document.getElementsByClassName('modal-form__overlay')[0];

for (var i = 0; i < myBtn1.length; i++) {
  myBtn1[i].addEventListener('click', function() {
    openModal1Window();
  });
}

for (var i = 0; i < myBtn1.length; i++) {
  BtnPresent[i].addEventListener('click', function() {
    openModal2Window();
  });
}

close1.addEventListener('click', closeModal1Window);
closeCheck.addEventListener('click', closeModal2Window);
closePresent.addEventListener('click', closeModal3Window);

function openModal1Window() {
  modal1.style.display = 'block';
  over1.style.display = 'block';
  $('body').css('overflow', 'hidden');
}

function openModal2Window() {
  modalPresent.style.display = 'block';
}

function closeModal1Window() {
  modal1.style.display = 'none';
  over1.style.display = 'none';
  $('body').css('overflow', 'auto');
}

function closeModal2Window() {
  modal1.style.display = 'none';
}

function closeModal3Window() {
  modalPresent.style.display = 'none';
  over1.style.display = 'none';
  $('body').css('overflow', 'auto');
}
