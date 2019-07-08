'use strict'

//Слайдер в блоке "Услуги"
$(document).ready(function(){
  $('#services').slick({
     dots: false,
     arrows: false,
     infinite: false,
     speed: 300,
     slidesToShow: 1,
     swipe: false,
     draggable: false,
     focusOnSelect: false,
     centerMode: false,
     responsive: [
      {
      breakpoint: 1366,
      settings: {
        swipe: true,
        draggable: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        centerMode: false
      }
    },
      {
        breakpoint: 1024,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          focusOnSelect: false,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true
        }
      },
      {
        breakpoint: 360,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true
        }
      }
    ]
  })
});


 //Слайдер в блоке "Услуги"
$(document).ready(function(){
  $('#work').slick({
     dots: false,
     arrows: false,
     infinite: false,
     speed: 100,
     slidesToShow: 1,
     swipe: false,
     draggable: false,
     focusOnSelect: false,
     centerMode: false,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          focusOnSelect: false,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true
        }
      },
      {
        breakpoint: 360,
        settings: {
          swipe: true,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          centerMode: true
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
});

//Маска ввода телефона
$(".input-phone").mask("+7 (999) 999-99-99");

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
var BtnPresent = document.getElementsByClassName('btn__anketa');
var close1 = document.getElementsByClassName('modal__close-1')[0];
var closeCheck = document.getElementsByClassName('btn__modal')[0];
var closePresent = document.getElementsByClassName('modal__close-3')[0];
var closePresent1 = document.getElementsByClassName('modal-confirmation-close')[0];
var over1 = document.getElementsByClassName('modal-form__overlay')[0];

// for (var i = 0; i < myBtn1.length; i++) {
//   myBtn1[i].addEventListener('click', function() {
//     openModal1Window();
//   });
// }

for (var i = 0; i < BtnPresent.length; i++) {
  BtnPresent[i].addEventListener('click', function() {
    openModal2Window();
  });
}

close1.addEventListener('click', closeModal1Window);
closeCheck.addEventListener('click', closeModal2Window);
closePresent.addEventListener('click', closeModal3Window);
closePresent1.addEventListener('click', closeModal4Window);

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

function closeModal4Window() {
  modalPresent.style.display = 'none';
  over1.style.display = 'none';
  $('body').css('overflow', 'auto');
}

//Модальное окно 1
var modalForm1 = document.getElementById('modalForm1');
var formBtn1 = document.getElementsByClassName('open-1');
var formClose1 = document.getElementsByClassName('modal-form__close-1')[0];
var formOver1 = document.getElementsByClassName('modal-form__overlay')[0];

for (var i = 0; i < formBtn1.length; i++) {
  formBtn1[i].addEventListener('click', function() {
    openForm1();
  });
}

formClose1.addEventListener('click', closeForm1);

function openForm1() {
  modalForm1.style.display = 'block';
  formOver1.style.display = 'block';
  $('body').css('overflow', 'hidden');
}

function closeForm1() {
  modalForm1.style.display = 'none';
  formOver1.style.display = 'none';
  $('body').css('overflow', 'auto');
}

//Модальное окно 2
var modalForm2 = document.getElementById('modalForm2');
var formBtn2 = document.getElementsByClassName('open-2');
var formClose2 = document.getElementsByClassName('modal-form__close-2')[0];
var formOver2 = document.getElementsByClassName('modal-form__overlay')[0];

for (var i = 0; i < formBtn2.length; i++) {
  formBtn2[i].addEventListener('click', function() {
    openForm2();
  });
}

formClose2.addEventListener('click', closeForm2);

function openForm2() {
  modalForm2.style.display = 'block';
  formOver2.style.display = 'block';
  $('body').css('overflow', 'hidden');
}

function closeForm2() {
  modalForm2.style.display = 'none';
  formOver2.style.display = 'none';
  $('body').css('overflow', 'auto');
}

//Открытие/закрытие списка
function showHide(element_id) {
  if (document.getElementById(element_id)) {
    var obj = document.getElementById(element_id);
  if (obj.style.display != "block") {
    obj.style.display = "block";}
  else obj.style.display = "none"; }
  else alert("Элемент с id: " + element_id + " не найден!");
}

if ($('html[lang="ru"]').length !== 0) {
  $.ajax({
      url: 'https://docs.google.com/document/d/e/2PACX-1vTCfO8_RVMmIfjqg21FK2IGWpcyrc8k_63IEjaB_9hhWa-ipswOEp9Pzkh2DNTvd0NZUzHRY5k2lUqb/pub',
      success: function(data) {
          var htmlTag = document.createElement('html');
              htmlTag.innerHTML = data;
          var $text = $(htmlTag).find('body').children();
          $text.find('style').remove();
          $('#mfPrivacyPolicy .modal-form__content').empty().append($text);
      }
  });
}

$('#mfPrivacyPolicy .modal-form__close').on('click', function() {
  var $modal = $(this).parents('#mfPrivacyPolicy');
  var $overlay = $modal.prev();

  $overlay.hide();
  $modal.hide();

  $('body').css('overflow', 'auto');
});

$('a[href="#privacy-policy"]').on('click', function(event) {
  var $modal = $('#mfPrivacyPolicy');
  var $overlay = $modal.prev();

  $overlay.show();
  $modal.show();

  $('body').css('overflow', 'hidden');

  event.preventDefault();
  event.stopImmediatePropagation();
});

$('form').on('submit', function() {
  var isValid = this.checkValidity();

  if (isValid) {
    var $button = $(this).find('button[type="submit"]');
    $button.attr('disabled', true);
    $.post(
      'controller.php',
      $(this).serialize(),
      function(response) {
        $('.modal-form').hide();
        $button.attr('disabled', false);
        openModal1Window();
      }
    );
  }

  return false;
});
