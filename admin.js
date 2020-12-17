const newProduct = document.querySelector('.cadastro');
const modalProduct = document.querySelector('.new-prod');
const modalClose = document.querySelector('.new-prod-close');

newProduct.addEventListener('click', function() {
    console.log("aqui")
    modalProduct.classList.add('bg-active-2');
});

modalClose.addEventListener('click', function () {
    modalProduct.classList.remove('bg-active-2');
});