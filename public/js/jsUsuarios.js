
let limpar = document.querySelector('#resetar');

limpar.addEventListener("click", function (e) {
    e.preventDefault();
   
    window.location.href = '/usuarios'
    
})

let adicionar = document.querySelector('#adicionar');

adicionar.addEventListener("click", function (e) {
    e.preventDefault();
   
    window.location.href = '/usuarios/cadastro'
    
})