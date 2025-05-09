import React from 'react'
import FilmeDetalhado from './FilmeDetalhado'

const ListaDeFilmesDetalhados = () => {
const filmes = [
    {titulo: 'O Poderoso Chefão', genero: 'Crime', ano: '1972'},
    {titulo: 'A Origem', genero: 'Ação', ano: '2010'},
    {titulo: 'Forrest Gump', genero: 'Drama', ano: '1994'}
]
  return (
    <div>
        <h3>Lista de Filmes</h3>
        {
            filmes.map((filme, index) => (
                <FilmeDetalhado key={index} titulo={filme.titulo} genero={filme.genero} ano={filme.ano} />
            ))
        }
    </div>
  )
}

export default ListaDeFilmesDetalhados