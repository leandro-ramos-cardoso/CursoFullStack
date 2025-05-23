import React from 'react'

const Metade = ({ numero }) => {
    const meio = numero / 2
    return (
        <div>
            <p>A metade de {numero} é {meio}</p>
        </div>
    )
}

export default Metade