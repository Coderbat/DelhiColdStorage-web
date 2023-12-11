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

// window.addEventListener('scroll', function() {
//   var image = document.getElementById('parallax-image1');
//   var submitButton = document.getElementById('image_1_end');
//   var submitButtonPosition = submitButton.offsetTop;

//   if (window.scrollY > submitButtonPosition) {
//     image.style.position = 'absolute';
//     console.log(submitButton.offsetTop)
//     console.log(window.scrollY)
//   } else {
//     image.style.position = 'sticky';
//   }
// });