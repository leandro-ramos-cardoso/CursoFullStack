function verificaDiaSemana() {
    var dataAtual = window.document.getElementById('txtdata').value;
    var resultado = window.document.getElementById('resultado');
    
    if (!dataAtual) {
        resultado.innerHTML = "<p>Por favor, insira uma data válida.</p>";
        return;
    }

    var data = new Date(dataAtual);
    var diaSemana = data.getDay();

    switch (diaSemana) {
        case 0:
            console.log(`Hoje é Domingo dia ${data.toLocaleDateString()}.`);
            break;
        case 1:
            resultado.innerHTML =
            `
            <p><strong>Dia da semana</strong> <br> Segunda-feira</p>
            <p><strong>Data</strong> <br> ${data.toLocaleDateString()}</p>
            `
            break;
        case 2:
            resultado.innerHTML = 
            `
            <p><strong>Dia da semana</strong> <br> Terça-feira</p>
            <p><strong>Data</strong> <br> ${data.toLocaleDateString()}</p>
            `
            break;
        case 3:
            console.log(`Hoje é Quarta dia ${data.toLocaleDateString()}.`);
            break;
        case 4:
            console.log(`Hoje é Quinta dia ${data.toLocaleDateString()}.`);
            break;
        case 5:
            console.log(`Hoje é Sexta dia ${data.toLocaleDateString()}.`);
            break;
        case 6:
            console.log(`Hoje é Sabádo dia ${data.toLocaleDateString()}.`);
            break;
    }
}



