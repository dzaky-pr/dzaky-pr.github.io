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
