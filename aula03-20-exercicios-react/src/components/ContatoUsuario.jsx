import React from 'react'

const ContatoUsuario = (props) => {
  return (
    <div>
        <h3>Contato do Usuário</h3>
        <p>Nome: {props.nome}</p>
        <p>Email: {props.email}</p>
        <p>Telefone: {props.telefone}</p>
    </div>
  )
}

export default ContatoUsuario