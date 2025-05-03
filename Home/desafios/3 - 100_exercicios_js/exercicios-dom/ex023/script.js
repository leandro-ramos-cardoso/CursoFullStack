function fazerLogin(){

    // var nome = 'leandro'
    // var senha = '123'

    var nome = window.document.getElementById('txtuser').value;
    var senha = window.document.getElementById('txtpass').value;

    var resultado = window.document.getElementById('resultado');

    if(nome == 'admin' && senha == '123'){
        alert('Login feito com sucesso')
    } else {
        alert('ERRO')
    }


}