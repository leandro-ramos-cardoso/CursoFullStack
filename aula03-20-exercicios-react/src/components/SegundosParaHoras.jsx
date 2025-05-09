import React from 'react'

const SegundosParaHoras = (props) => {
const horas = props.segundos / 3600

  return (
    <div>
        <p>{props.segundos} segundos equivalem a {horas} horas.</p>
    </div>
  )
}

export default SegundosParaHoras