const newProduct = document.querySelector('.cadastro-prod');
const modalProduct = document.querySelector('.new-prod');
const modalClose = document.querySelector('.new-prod-close');

newProduct.addEventListener('click', function() {
    modalProduct.classList.add('bg-active-prod');
});

modalClose.addEventListener('click', function () {
    modalProduct.classList.remove('bg-active-prod');
});

const newCategory = document.querySelector('.register-category');
const modalCategory = document.querySelector('.new-category');
const modalCloseCategory = document.querySelector('.new-category-close');

newCategory.addEventListener('click', function() {
    console.log("alo" + modalCategory)
    modalCategory.classList.add('bg-active-category');
});

modalCloseCategory.addEventListener('click', function () {
    modalCategory.classList.remove('bg-active-category');
});