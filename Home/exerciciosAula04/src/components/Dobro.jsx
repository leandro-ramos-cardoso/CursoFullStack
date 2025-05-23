import React from 'react'

const Dobro = ({ numero }) => {
    const dobrarValor = numero * 2
    return (
        <div>
            <p>O dobro de {numero} é {dobrarValor}</p>
        </div>
    )
}

export default Dobro