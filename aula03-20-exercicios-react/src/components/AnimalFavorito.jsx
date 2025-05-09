import React from 'react'

const AnimalFavorito = (props) => {
const escolhaAnimal = (animal) => {
    if(animal === 'cachorro'){
        return <p>🐶 Eu amo cachorros!</p>
    }else if(animal === 'gato'){
        return <p>🐱 Eu amo gatos!</p>
    }else{
        return <p>🐾 Amo todos os animais!</p>
    }
}
  return (
    <div>
        {escolhaAnimal('cachorro')}
        {escolhaAnimal('gato')}
        {escolhaAnimal('todos')}
    </div>
  )
}

export default AnimalFavorito