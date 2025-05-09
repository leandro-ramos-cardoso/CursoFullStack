import React from 'react'

const FilmeDetalhado = (props) => {
  return (
    <div>
        <p>Titulo: {props.titulo}</p>
        <p>Genêro: {props.genero}</p>
        <p>Ano: {props.ano}</p>
    </div>
  )
}

export default FilmeDetalhado