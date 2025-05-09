import React from 'react'

const DivideComEstilo = (props) => {
const divisao = props.num1 / props.num2
  return (
    <div>
        <p className='divisao'>O resultado de {props.num1} / {props.num2} é igual a {divisao}</p>
    </div>
  )
}

export default DivideComEstilo