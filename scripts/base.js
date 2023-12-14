window.onload = function() {
  var phoneInput = document.getElementById('phone');
  phoneInput.oninvalid = function(event) {
      event.target.setCustomValidity('Please enter a valid phone number.');
  }
  phoneInput.oninput = function(event) {
      event.target.setCustomValidity('');
  }
}
const form = document.getElementById('ContactForm');

form.addEventListener('submit', function(e) {

  const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

  if (!hCaptcha) {
      e.preventDefault();
      alert("Please fill out captcha field")
      return
  }
});


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


window.onload = function() {
  if (window.hcaptcha) {
    hcaptcha.reset();
  }
};


// window.addEventListener('scroll', function() {
//   var slideShowDiv = document.querySelector('.slide_show_div');
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//   var windowHeight = window.innerHeight;

//   if (scrollPosition > windowHeight) { // 100vh is equal to the window height
//       slideShowDiv.style.position = 'absolute';
//       slideShowDiv.style.top = (scrollPosition - windowHeight) + 'px'; // slide off based on how much you've scrolled past 100vh
//   } else {
//       slideShowDiv.style.position = 'sticky';
//       slideShowDiv.style.top = '0'; // reset to top when scrolling up
//   }
// });