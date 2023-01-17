document.getElementById('themeToggleButton').addEventListener('click', e => {
    // console.log(e);
    toggleTheme(e);
})

function setTheme(theme) {
    if(theme == 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

window.onload = function() {
    const currentTheme = localStorage.getItem('currentTheme');
    setTheme(currentTheme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('currentTheme');

    currentTheme === 'dark' 
    ? localStorage.setItem('currentTheme', 'dark') 
    : localStorage.setItem('currentTheme', 'light');
    console.log(currentTheme)

    if (currentTheme == 'dark') {
        console.log('chuj')
        localStorage.setItem('currentTheme', 'light');
        setTheme('light');
    } else {
        localStorage.setItem('currentTheme', 'dark');
        setTheme('dark');
    }

}

slideInSections = document.querySelectorAll('.slide-in-left');