import React from 'react'

const ListaProdutos = ({nomeProduto = []}) => {
  return (
    <div>
        <h3>Lista de Produtos</h3>
        <ul>
            {nomeProduto.map((produto, index) => (
                <li key={index}>{produto}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListaProdutos