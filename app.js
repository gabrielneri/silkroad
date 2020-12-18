const cadastrar = document.querySelector('.cadastrar');
const modalCadastro = document.querySelector('.cadastro');
const modalCadastroClose = document.querySelector('.cadastro-close');

cadastrar.addEventListener('click', function () {
    modalCadastro.classList.add('bg-active-cadastro');
});

modalCadastroClose.addEventListener('click', function () {
    modalCadastro.classList.remove('bg-active-cadastro');
});