import React from 'react'

const MensagemClima = ({ clima }) => {
let mensagem

    if (clima === 'sol') {
        mensagem = <p>Dia de praia ☀️</p>
    } else if (clima === 'chuva') {
        mensagem = <p>Leve o guarda-chuva ☔️</p>
    } else {
        mensagem = <p>Opção invalida!</p>
    }
    return (
        <div>
            <h1>Mensagem do Clima</h1>
            {mensagem}
        </div>
    )
}

export default MensagemClima