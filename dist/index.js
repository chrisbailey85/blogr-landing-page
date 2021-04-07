const navBtn = document.getElementById('hamburger');
const navIcon = document.querySelector('.nav-icon');
const navEl = document.querySelector('.nav')

navBtn.addEventListener('click', () => {

    navEl.classList.toggle('show')
    if (navEl.classList.contains('show')) {
        navIcon.src = './images/icon-close.svg';
        navIcon.alt = 'nav-close-icon';
    } else {
        navIcon.src = './images/icon-hamburger.svg';
        navIcon.alt = 'nav-open-icon';
    }
})