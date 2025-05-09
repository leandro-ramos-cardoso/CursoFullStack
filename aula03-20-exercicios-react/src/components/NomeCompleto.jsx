import React from 'react'

const NomeCompleto = (props) => {
  return (
    <div>
        <h1>Seu nome completo é: {props.nome} {props.sobrenome}</h1>
    </div>
  )
}

export default NomeCompleto