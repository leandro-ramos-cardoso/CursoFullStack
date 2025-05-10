import React from 'react'
import { useState } from 'react'

const HookContador = () => {
const [contador, setContador] = useState(1)

function incrementarContador() {
    setContador(contador + 1)
}

  return (
    <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={(incrementarContador)}>Incrementar contador</button>
    </div>
  )
}

export default HookContador