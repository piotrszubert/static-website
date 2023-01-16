const themeSelect = document.getElementById('themeSelect');

themeSelect.addEventListener('change', event => {
    const selectedTheme = event.currentTarget.value;
    console.log(event);

    selectedTheme == 'dark' 
    ? document.body.classList.add('dark-mode')
    : document.body.classList.remove('dark-mode');
    
})