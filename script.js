document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate if the fields are not empty
    if (name && email && message) {
        // Show success message
        document.getElementById('responseMessage').textContent = 'Thank you for your message, ' + name + '! We will get back to you soon stay conected .';
        document.getElementById('responseMessage').style.color = '#2ecc71';
        
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        // Show error message
        document.getElementById('responseMessage').textContent = 'Please fill in all the fields.';
        document.getElementById('responseMessage').style.color = '#e74c3c';
    }
});
