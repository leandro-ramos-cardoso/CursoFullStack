import React from 'react'

const MinutosParaSegundos = (props) => {
const segundos = props.minutos * 60
  return (
    <div>
        <p>{props.minutos} minutos equivalem a {segundos} segundos.</p>
    </div>
  )
}

export default MinutosParaSegundos