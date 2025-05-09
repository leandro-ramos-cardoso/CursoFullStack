import React from 'react'

const ListaDeFrutas = ({ nomeFruta = [] }) => {
  return (
    <div>
      <h3>Lista de Frutas</h3>
      <ul>
        {nomeFruta.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeFrutas 