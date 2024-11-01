const images = document.querySelectorAll('.lazy-image');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
});

images.forEach(image => {
    imageObserver.observe(image);
});