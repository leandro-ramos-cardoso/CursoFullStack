import React from 'react'

const Divisao = (props) => {
const dividir = props.num1 / props.num2
  return (
    <div>
      <h3>O resultado de {props.num1} / {props.num2} é igual a {dividir}</h3>
    </div>
  )
}

export default Divisao