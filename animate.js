const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            // entry.target.classList.remove('show')
        }
    })
})

slideInSections = document.querySelectorAll('.hidden');
slideInSections.forEach(element => observer.observe(element))