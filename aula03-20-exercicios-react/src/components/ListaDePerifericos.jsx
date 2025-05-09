import React from 'react'
import Perifericos from './Perifericos'

const ListaDePerifericos = () => {
const perifericos = [
    {nome: 'Teclado', categoria: 'Entrada'},
    {nome: 'Mouse', categoria: 'Entrada'},
    {nome: 'Monitor', categoria: 'Saida'}
]
  return (
    <div>
        <h3>Lista de Perifericos</h3>
        {
            perifericos.map((periferico, index) => (
                <Perifericos key={index} nome={periferico.nome} categoria={periferico.categoria} />
            ))
        }
    </div>
  )
}

export default ListaDePerifericos