const newProduct = document.querySelector('.cadastro-prod');
const modalProduct = document.querySelector('.new-prod');
const modalClose = document.querySelector('.new-prod-close');

newProduct.addEventListener('click', function() {
    console.log("aqui")
    modalProduct.classList.add('bg-active-prod');
});

modalClose.addEventListener('click', function () {
    modalProduct.classList.remove('bg-active-prod');
});