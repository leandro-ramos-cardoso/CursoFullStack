import React from 'react'

const RaizQuadrada = ({ numero }) => {
const raiz = Math.sqrt(numero);

  return (
    <div>
        <p>A raiz quadrada de {numero} é {raiz}</p>
    </div>
  )
}

export default RaizQuadrada