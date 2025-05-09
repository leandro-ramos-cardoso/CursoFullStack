import React from 'react'

const Perifericos = (props) => {
  return (
    <div>
        <h3>Lista de Perifericos</h3>
        <p>Nome: {props.nome}</p>
        <p>Categoria: {props.categoria}</p>
    </div>
  )
}

export default Perifericos