import React from 'react'

const Divisao = (props) => {
const dividir = props.num1 / props.num2
  return (
    <div>
      <h1>O resultado de {props.num1} / {props.num2} é igual a {dividir}</h1>
    </div>
  )
}

export default Divisao