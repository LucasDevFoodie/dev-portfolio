const darkMode = () => {
    const keyTheme = 'theme';
    const mode = 'light-mode';
    const themeToggleBtns = [document.querySelector('#theme-toggle-web'),
    document.querySelector('#theme-toggle-mobile')];

    //State
    const theme = localStorage.getItem(keyTheme);

    //On mount
    theme && document.body.classList.add(theme);

    //Handler
    const handleThemeToggle = () => {
        var isLight = document.body.classList.toggle(mode);
        
        if (isLight) {
            localStorage.setItem(keyTheme, mode);
        }
        else {
            localStorage.removeItem(keyTheme);
            document.body.removeAttribute('class')
        }
    }

    //Events
    themeToggleBtns.forEach((btn) => 
        btn.addEventListener('click', () => handleThemeToggle())
    )
}

export default darkMode;