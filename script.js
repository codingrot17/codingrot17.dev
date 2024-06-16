document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    alert('Thank you for registering! Please be patient, we will get back to you shortly.');
    this.submit();  // Submit the form to Formspree
});