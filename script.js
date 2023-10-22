// For Animate On Scroll
AOS.init();

// For Navbar transition
window.addEventListener('scroll', function () {
  var aboutSection = document.getElementById('about-us');
  var navbar = document.getElementById('dzaky-site-navbar');
  var aboutSectionRect = aboutSection.getBoundingClientRect();

  if (aboutSectionRect.top <= 0) {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});

// For Type
var typed = new Typed('.typed', {
  strings: ['Remanufactured.', ' Service Exchange.', ' Showroom.', ' Events.'],
  typeSpeed: 50,
  backDelay: 3000,
  loop: true,
});

// JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// function validate_form() {
//   var first_name = document.getElementById('first-name');
//   var last_name = document.getElementById('last-name');
//   var phone_number = document.getElementById('phone-number');
//   var email = document.getElementById('email');
//   var selectMenuType = document.getElementById('selectMenuType');
//   var description_text = document.getElementById('description-text');
//   var invalidCheck = document.getElementById('invalidCheck');

//   var firstNameInvalid = document.getElementById('first-name-invalid-feedback');
//   var lastNamInvalid = document.getElementById('last-name-invalid-feedback');
//   var phoneInvalid = document.getElementById('phone-invalid-feedback');
//   var emailInvalid = document.getElementById('email-invalid-feedback');
//   var typeInvalid = document.getElementById('type-invalid-feedback');
//   var descriptionInvalid = document.getElementById('description-invalid-feedback');
//   var checkInvalid = document.getElementById('check-invalid-feedback');

//   // cek yang salah
//   if (first_name.value == '') {
//     first_name.focus();
//     firstNameInvalid.style.display = 'block';
//     return false;
//   }

//   if (last_name.value == '') {
//     last_name.focus();
//     nameInvalid.style.display = 'block';
//     return false;
//   }

//   if (phone_number.value == '') {
//     phone_number.focus();
//     phoneInvalid.style.display = 'block';
//     return false;
//   }

//   if (email.value == '') {
//     email.focus();
//     emailInvalid.style.display = 'block';
//     return false;
//   }

//   if (selectMenuType.value == '') {
//     selectMenuType.focus();
//     emailInvalid.style.display = 'block';
//     return false;
//   }

//   if (description_text.value == '') {
//     description_text.focus();
//     emailInvalid.style.display = 'block';
//     return false;
//   }

//   if (invalidCheck.value == '') {
//     invalidCheck.focus();
//     messageInvalid.style.display = 'block';
//     return false;
//   }
// }
