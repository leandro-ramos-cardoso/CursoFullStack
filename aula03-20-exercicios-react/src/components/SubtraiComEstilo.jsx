import React from 'react'

const SubtraiComEstilo = (props) => {
const sub = props.num1 - props.num2
  return (
    <div>
        <p className='subtracao'>O resultado de {props.num1} - {props.num2} é igual a {sub}.</p>
    </div>
  )
}

export default SubtraiComEstilo