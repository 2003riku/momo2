function checkScroll() {
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (containerTop < windowHeight * 0.75) {
            container.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
