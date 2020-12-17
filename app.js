const login = document.querySelector('.login');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

login.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
});