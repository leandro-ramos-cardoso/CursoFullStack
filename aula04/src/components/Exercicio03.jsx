import React from 'react'

const Exercicio03 = () => {

const condicao = false

const estiloCondicional = condicao 
? {
    color: '#ffa500',
    backgroundColor: '#808080',
    height: '150px',
    margin: '20px'
  }
: {
    color: '#00800',
    backgroundColor: '#ffff00',
    height: '100px',
    margin: '10px'
  }

  return (
    <div style={estiloCondicional}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque praesentium aspernatur modi a odio officia laboriosam! Ea corporis consequuntur, aperiam sunt, earum nisi iure quibusdam adipisci nostrum ex ab.</p>
    </div>
  )
}

export default Exercicio03