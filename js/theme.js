document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const body = document.body;

    // 1. Check if user previously chose a theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeText.innerText = "🌙 Dark Mode";
    }

    // 2. Toggle Theme on Click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        let theme = 'dark';
        if (body.classList.contains('light-mode')) {
            theme = 'light';
            themeText.innerText = "🌙 Dark Mode";
        } else {
            themeText.innerText = "☀️ Light Mode";
        }
        
        // 3. Save the choice so it stays when page refresh
        localStorage.setItem('theme', theme);
    });
});