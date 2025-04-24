function geraAlerta() {
    alert("Botão clicado!");
}

const myButton = document.getElementById("myButton");
myButton.addEventListener('click', geraAlerta);