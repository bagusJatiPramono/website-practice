const button = document.querySelector('.menu-btn');
const nav = document.querySelector('.side-nav');

button.addEventListener('click',() => {
    nav.classList.toggle('active');
});