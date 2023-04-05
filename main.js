const navbar = document.querySelector('nav');
const about = document.querySelector('#about')

const firstSection = document.querySelector('section:first-of-type').offsetTop;


window.addEventListener('scroll', () => {

    if (window.pageYOffset >= firstSection) {
        navbar.classList.add('blue');
    } else {
        navbar.classList.remove('blue');
    }
});