import React from 'react'

const Subtracao = (props) => {
const subtracao = props.num1 - props.num2
  return (
    <div>
        <h3>O resultado de {props.num1} - {props.num2} é igual a {subtracao}</h3>
    </div>
  )
}

export default Subtracao