function formulario(){
    var nome = window.document.getElementById('txtname').value;
    var email = window.document.getElementById('txtemail');
    var mensagem = window.document.getElementById('txtmsg');
    var resultado = window.document.getElementById('resultado');

    if(nome.length == 0){
        alert('Preencha os dados')
    }

resultado.innerHTML = `${nome}`

}