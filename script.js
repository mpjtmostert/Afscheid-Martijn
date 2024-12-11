const themeToggleButton = document.querySelector('.theme_toggle');
const theme = localStorage.getItem('theme');
const elements = document.querySelectorAll('.svg');

if (theme) {
    document.body.classList.add('dark_mode');
    elements.forEach(i => i.classList.add('svg-dark-mode'));
};

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode');
    elements.forEach(i => i.classList.toggle('svg-dark-mode'));
    
    if (document.body.classList.contains('dark_mode')) {
        localStorage.setItem('theme', 'dark_mode');
    } else {
        localStorage.removeItem('theme');
    };
});
