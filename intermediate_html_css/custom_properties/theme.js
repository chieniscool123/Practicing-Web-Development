function setTheme() {
    // refer to the html which is the root document of the html
    const root = document.documentElement;
    // checking the current class of root. if dark then (aka condition is true) then newTheme = 'light' else newTheme ='dark'
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    document.querySelector('.theme-name').textContent = newTheme;
    // set the theme name letter = dark or light
}
document.querySelector('.theme-toggle').addEventListener('click', setTheme)

// 1. you click the theme-toggle button
// 2.  it triggered the setTheme()
// 3. so if it dark and it true then the variable newTheme will be the equal to light
// 4. the new class for root will be equal to newTheme which is light
// 5. set the theme name (dark) to equal to newTheme (light)

// It will automatically triggered the csss to switch between dark and light them when you change the name 