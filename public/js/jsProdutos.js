
let limpar = document.querySelector('#resetar');

limpar.addEventListener("click", function (e) {
    e.preventDefault();
   
    window.location.href = '/produtos'
    
})

let adicionar = document.querySelector('#adicionar');

adicionar.addEventListener("click", function (e) {
    e.preventDefault();
   
    window.location.href = '/produtos/cadastro'
    
})


