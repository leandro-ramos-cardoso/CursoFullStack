import React from 'react'

const Produto = (props) => {
  return (
    <div className='produto'>
        <h3>Produto na vitrine</h3>
        <p>Nome: {props.nome}</p>
        <p>Preço: {props.preco}</p>
        <p>Descrição: {props.descricao}</p>
    </div>
  )
}

export default Produto