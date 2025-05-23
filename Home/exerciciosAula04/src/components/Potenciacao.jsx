import React from 'react'

const Potenciacao = ({ numero }) => {
    const potencia = Math.pow(numero, 2);
    return (
        <div>
            <p>O quadrado de {numero} é {potencia}</p>
        </div>
    )
}

export default Potenciacao