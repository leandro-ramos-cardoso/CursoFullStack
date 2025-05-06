import React from 'react'

const Adicao = (props) => {
const soma = props.num1 + props.num2
  return (
    <div className='expressoesAritmeticas'>
        <h3>O resultado de {props.num1} + {props.num2} é igual a {soma}</h3>
    </div>
  )
}

export default Adicao