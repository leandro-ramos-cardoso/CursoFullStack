function calcularDesconto() {
    var nomeProduto = window.document.getElementById('txtproduto').value;
    var precoProduto = parseFloat(window.document.getElementById('txtvalor').value);
    var nomeProduto2 = window.document.getElementById('txtproduto2').value;
    var precoProduto2 = parseFloat(window.document.getElementById('txtvalor2').value);
    var resultado = window.document.getElementById('resultado');
    var total = parseFloat((precoProduto + precoProduto2));
    var desconto = parseFloat(total - (total * (10 / 100)));

    if(total > 3){
        resultado.style.background = '#FF3333';
        resultado.style.color = 'white';
        resultado.style.borderRadius = '20px';
        resultado.style.padding = '10px';
        resultado.style.marginBottom = '20px';
        resultado.style.width = '400px';
        resultado.style.margin = '0 auto';

        resultado.innerHTML =
    `
    <p>
        PRODUTOS <br><br>
        ${nomeProduto} -> R$${precoProduto} <br>
        ${nomeProduto2} -> R$${precoProduto2} <br><br>

        TOTAL SEM DESCONTO: R$${total} <br>
        
        TOTAL COM DESCONTO: R$${desconto}
    </p>
    `
    } else {
        resultado.style.background = '#FF3333';
        resultado.style.color = 'white';
        resultado.style.borderRadius = '20px';
        resultado.style.padding = '10px';
        resultado.style.marginBottom = '20px';
        resultado.style.width = '400px';
        resultado.style.margin = '0 auto';
        
        resultado.innerHTML = 
        `
        <p>
            Não teve desconto <br><br>
            PRODUTOS <br><br>
            ${nomeProduto} -> R$${precoProduto} <br>
            ${nomeProduto2} -> R$${precoProduto2} <br><br>

            TOTAL SEM DESCONTO: R$${total}
        <p/>
        `;
    }
}