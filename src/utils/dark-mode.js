/* Dark mode is set by default.
    SVG colors are coupled with the class vaue
*/

export const darkMode = () => {
    const keyTheme = 'theme';
    const lightMode = 'light-mode';
    const themeToggleBtns = [
        document.querySelector('#theme-toggle-web'),
        document.querySelector('#theme-toggle-mobile')
    ];
    
    //State
    const theme = localStorage.getItem(keyTheme);

    //On mount
    theme && document.body.classList.add(theme);

    //Handler
    const handleThemeToggle = () => {
        var isLight = document.body.classList.toggle(lightMode);
        
        if (isLight) {
            localStorage.setItem(keyTheme, lightMode);
        }
        else {
            localStorage.removeItem(keyTheme);
            document.body.removeAttribute('class')
        }
    }

    //Events
    themeToggleBtns.forEach((btn) => 
        btn.addEventListener('click', () => {
            handleThemeToggle();
        })
    )
}