const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            // entry.target.classList.remove('show')
        }

        if (entry.isIntersecting && entry.target.classList.contains('drop-in-hidden')) {
            entry.target.classList.add('drop-in-show')
        } else {
            // entry.target.classList.remove('drop-in-show')
        }
    })
})

slideInSections = document.querySelectorAll('.hidden');
slideInSections.forEach(element => observer.observe(element))

dropInSections = document.querySelectorAll('.drop-in-hidden');
dropInSections.forEach(element => observer.observe(element))