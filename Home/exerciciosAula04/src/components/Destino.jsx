import React from 'react'

const Destino = () => {
    function mostrarDestino(pais) {
        if (pais === 'br') {
            return <h1>Brasil</h1>
        } else {
            return <h2>Exterior</h2>
        }
    }
    return (
        <div>
            {mostrarDestino('br')}
            {mostrarDestino('us')}
        </div>
    )
}

export default Destino