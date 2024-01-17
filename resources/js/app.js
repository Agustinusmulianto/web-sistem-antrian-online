import './bootstrap';
import 'flowbite';

// Hamburger line
document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('nav');
    let windowWidth = window.innerWidth;

    if (windowWidth > 768 || windowWidth >= 1024) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('white-bg');
            } else {
                navbar.classList.remove('white-bg');
            }
        });
    } else {
        navbar.classList.add('white-bg');
    }

});