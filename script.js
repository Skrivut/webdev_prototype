// script.js

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    const buttonText = toggleButton.querySelector('.button-text');

    // 1. Check for saved preference and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        // Set initial button text based on saved theme
        buttonText.textContent = savedTheme === 'light-mode' ? 'DARK MODE' : 'LIGHT MODE';
    } else {
        // Default to dark mode if no preference is found
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        buttonText.textContent = 'LIGHT MODE';
    }

    // 2. Add the click handler
    toggleButton.addEventListener('click', () => {
        // Check if the current state is dark mode
        if (body.classList.contains('dark-mode')) {
            // Switch to Light Mode
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            buttonText.textContent = 'DARK MODE';
        } else {
            // Switch to Dark Mode
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            buttonText.textContent = 'LIGHT MODE';
        }
    });
});