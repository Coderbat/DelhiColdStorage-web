window.onload = function() {
  const form = document.getElementById('ContactForm');
  form.reset();
  var phoneInput = document.getElementById('phone');
  phoneInput.oninvalid = function(event) {
      event.target.setCustomValidity('Please enter a valid phone number.');
  }
  phoneInput.oninput = function(event) {
      event.target.setCustomValidity('');
  }
}
// const form = document.getElementById('ContactForm');

// form.addEventListener('submit', function(e) {

//   const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

//   if (!hCaptcha) {
//       e.preventDefault();
//       alert("Please fill out captcha field")
//       return
//   }
// });


// Slide show js
const slides = document.querySelectorAll(".slide");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

nextButton.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prevButton.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Get all the links inside the navbar
var navLinks = document.querySelectorAll('nav ul li a');

// Get the checkbox used to toggle the hamburger menu
var navToggle = document.querySelector('.nav-toggle');

// Add a click event listener to each link
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    // Uncheck the checkbox to collapse the navbar
    navToggle.checked = false;
  });
}

// Wait for the document to load
$(document).ready(function() {
  // Select all elements with the classes 
  const elements = $('.grid-flex');

  // Set initial opacity to 0
  gsap.set(elements, { autoAlpha: 0 });

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const elementTop = $(element).offset().top;
    const elementBottom = elementTop + $(element).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Function to animate elements
  function animateElements() {
    elements.each(function() {
      if (isInViewport(this)) {
        gsap.to(this, { duration: 2.5, autoAlpha: 1 });
      }
    });
  }

  // Animate elements initially and on scroll
  animateElements();
  $(window).on('scroll resize', animateElements);
});