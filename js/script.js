// Select the signup link and the welcome section
const signupLink = document.getElementById('signup');
const welcomeSection = document.getElementById('welcome-section');

// When the user clicks "Sign Up"
signupLink.addEventListener('click', function(e) {
    e.preventDefault();

    // Add the class that triggers the animation
    welcomeSection.classList.add('animate');

    // Wait for the animation to finish before redirecting
    setTimeout(function() {
        window.location.href = 'register.html'; // Redirect to register.html after animation
    }, 1000); // Duration of the animation (1 second)
});
