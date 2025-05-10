document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert("Thank you for contacting us, ${name}! We'll get back to you shortly.");

    // Here you can add code to send the form data to the backend or to an email service.
});