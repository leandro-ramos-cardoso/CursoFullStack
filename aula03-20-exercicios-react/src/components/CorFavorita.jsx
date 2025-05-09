import React from 'react'

const CorFavorita = ({ cor = 'blue' }) => {
  return (
    <div style={{ 
      backgroundColor: cor,
      width: '100px',
      height: '100px',
      margin: '10px'
    }}>
    </div>
  )
}

export default CorFavorita