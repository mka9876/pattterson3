document.getElementById('contact-form').addEventListener('submit', function(event){
  event.preventDefault();
  alert('Thanks for contacting Patterson! We will get back to you shortly.');
  this.reset();
});
