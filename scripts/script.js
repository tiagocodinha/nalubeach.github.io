
// check if window is scrolled to add opacity to the navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY > 0;
    navbar.classList.toggle('navbar-scrolled', scrolled);
  });