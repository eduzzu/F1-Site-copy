const lightThemeBtn = document.getElementById('light_theme');
const darkThemeBtn = document.getElementById('dark_theme');

lightThemeBtn.addEventListener('click', setLightTheme);
darkThemeBtn.addEventListener('click', setDarkTheme);

function setLightTheme(){
    const themeStyle = document.getElementById('theme-style');
    themeStyle.href = 'app.css';
}

function setDarkTheme(){
    const themeStyle = document.getElementById('theme-style');
    themeStyle.href = 'dark-theme.css';
}
