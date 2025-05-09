import React from 'react'

const MultiplicaComEstilo = (props) => {
const multi = props.num1 * props.num2
  return (
    <div>
        <p className='multiplicacao'>O resultado de {props.num1} x {props.num2} é igual a {multi}.</p>
    </div>
  )
}

export default MultiplicaComEstilo