

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    const buttonText = toggleButton.querySelector('.button-text');

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        
        buttonText.textContent = savedTheme === 'light-mode' ? 'DARK MODE' : 'LIGHT MODE';
    } else {
       
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        buttonText.textContent = 'LIGHT MODE';
    }

   
    toggleButton.addEventListener('click', () => {
       
        if (body.classList.contains('dark-mode')) {
            
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            buttonText.textContent = 'DARK MODE';
        } else {
            
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            buttonText.textContent = 'LIGHT MODE';
        }
    });
});