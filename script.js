document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert(`Thank you, ${name}! Your message has been sent.`);
        } else {
            alert('There was a problem sending your message.');
        }
    })
    .catch(() => {
        alert('An error occurred. Please try again later.');
    });
});
