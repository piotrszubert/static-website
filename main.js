document.getElementById('themeToggleButton').addEventListener('click', e => {
    toggleTheme(e);
})

function setTheme(theme) {
    if(theme == 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeDarkIcon').style.display = 'none';
        document.getElementById('themeLightIcon').style.display = 'inline';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('themeDarkIcon').style.display = 'inline';
        document.getElementById('themeLightIcon').style.display = 'none';
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

    if (currentTheme == 'dark') {
        localStorage.setItem('currentTheme', 'light');
        setTheme('light');
    } else {
        localStorage.setItem('currentTheme', 'dark');
        setTheme('dark');
    }

}

slideInSections = document.querySelectorAll('.slide-in-left');