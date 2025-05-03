function gerarSenha() {
    var senha = parseInt(window.document.getElementById('txts').value);
    var senhaGerada = String(Math.random().toString().substring(2, 2 + senha));
    var resultado = window.document.getElementById('resultado');

    resultado.innerHTML = `${senhaGerada}`
}