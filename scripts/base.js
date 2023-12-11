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

window.addEventListener('scroll', function() {
  var image = document.getElementById('parallax-image');
  var certainElement = document.getElementById('image_1_end');
  var certainElementPosition = certainElement.getBoundingClientRect().top + window.scrollY;

  if (window.scrollY > certainElementPosition) {
      image.style.position = 'absolute';
  } else {
      image.style.position = 'sticky';
  }
});