import React from 'react'

const HorasParaSegundos = (props) => {
const segundos = props.horas * 3600

  return (
    <div>
        <p>{props.horas} horas equivalem a {segundos} segundos.</p>
    </div>
  )
}

export default HorasParaSegundos