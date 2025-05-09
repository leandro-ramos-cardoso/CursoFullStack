import React, { useState } from 'react'

const HookContador = () => {
const [contador, setCount] = useState(1)
  return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setCount(contador + 1)}>
            Incrementar contador
        </button>
    </div>
  )
}

export default HookContador