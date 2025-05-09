import React from 'react'

const SegundosParaMinutos = (props) => {
const minutos = props.segundos / 60 
  return (
    <div>
        <p>{props.segundos} segundos equivalem a {minutos} minutos.</p>
    </div>
  )
}

export default SegundosParaMinutos