import React from 'react'

const MensagemNota = () => {
const notaEscolar = (nota) => {
    if(nota >= 7) {
        return 'Aprovado'
    } else if(nota >= 5) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}
  return (
    <div>
        <p>{notaEscolar(8)} </p>
        <p>{notaEscolar(5.5)}</p>
        <p>{notaEscolar(3)}</p>
    </div>
  )
}

export default MensagemNota