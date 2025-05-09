import React from 'react'

const SaudacaoHorario = () => {
const SaudacaoHorario = (hora) => {
    if(hora < 12) {
        return <p>Bom dia!</p>
    } else if (hora <= 12 || hora < 18) {
        return <p>Boa tarde!</p>
    } else {
        return <p>Boa noite!</p>
    }
}
  return (
    <div>
        {SaudacaoHorario(7)}
        {SaudacaoHorario(12)}
        {SaudacaoHorario(20)}
    </div>
  )
}

export default SaudacaoHorario