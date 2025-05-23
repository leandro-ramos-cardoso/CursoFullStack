import React from 'react'
import Filme from './Filme'

const ListaDeFilmes = () => {
const filmes = [
    {titulo:'Senhor dos aneis', diretor:'Teste', ano:'2012'},
    {titulo:'Senhor dos aneis', diretor:'Teste', ano:'2012'},
    {titulo:'Senhor dos aneis', diretor:'Teste', ano:'2012'}
]
    return (
        <div>
            {
                filmes.map((filmes, index) => (
                    <Filme key={index} titulo={filmes.titulo} diretor={filmes.diretor} ano={filmes.ano}/>
                ))
            }
        </div>
    )
}

export default ListaDeFilmes