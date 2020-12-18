const newProduct = document.querySelector('.cadastro-prod');
const modalProduct = document.querySelector('.new-prod');
const modalClose = document.querySelector('.new-prod-close');

newProduct.addEventListener('click', function() {
    modalProduct.classList.add('bg-active-prod');
});

modalClose.addEventListener('click', function () {
    modalProduct.classList.remove('bg-active-prod');
});

const editProduct = document.getElementById("prod").querySelectorAll('.edit-btn');
const modalEditProduct = document.querySelector('.edit-prod');
const modalCloseEditProduct = document.querySelector('.edit-prod-close');

for(let i = 0; i < editProduct.length; i++) {
    editProduct[i].addEventListener('click', function() {
        modalEditProduct.classList.add('bg-active-edit-prod');
    });
}

modalCloseEditProduct.addEventListener('click', function () {
    modalEditProduct.classList.remove('bg-active-edit-prod');
});

const newCategory = document.querySelector('.register-category');
const modalCategory = document.querySelector('.new-category');
const modalCloseCategory = document.querySelector('.new-category-close');

newCategory.addEventListener('click', function() {
    modalCategory.classList.add('bg-active-category');
});

modalCloseCategory.addEventListener('click', function () {
    modalCategory.classList.remove('bg-active-category');
});

const editCategory = document.getElementById("barra").querySelectorAll('.btn-img');
const modalEditCategory = document.querySelector('.edit-category');
const modalCloseEditCategory = document.querySelector('.edit-category-close');

for(let i = 0; i < editCategory.length; i++) {
    editCategory[i].addEventListener('click', function() {
        console.log(editCategory);
        modalEditCategory.classList.add('bg-active-edit-category');
    });
}

modalCloseEditCategory.addEventListener('click', function () {
    modalEditCategory.classList.remove('bg-active-edit-category');
});