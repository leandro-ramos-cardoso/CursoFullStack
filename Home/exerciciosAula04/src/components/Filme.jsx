import React from 'react'

const Filme = ({ titulo, diretor, ano }) => {
    return (
        <div>
            <h2>Filme</h2>
            <p>Título: {titulo}</p>
            <p>Diretor: {diretor}</p>
            <p>Ano: {ano}</p>
        </div>
    )
}

export default Filme