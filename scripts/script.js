document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('show');
        }
    });

    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== hamburgerMenu) {
            navMenu.classList.remove('show');
        }
    });
});