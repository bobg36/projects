// JavaScript to toggle the theme
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggleButton.textContent = 'Switch to Light Mode';
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
        }
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeToggleButton.textContent = 'Switch to Light Mode';
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
        }
        
        localStorage.setItem('theme', theme);
    });
});
