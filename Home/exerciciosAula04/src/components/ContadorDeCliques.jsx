import React from 'react'
import { useState } from 'react'

const ContadorDeCliques = () => {
    const [cont, setCont] = useState(1)
    function incrementaCliques() {
        setCont(cont + 1)
    }
    return (
        <div>

            <button onClick={incrementaCliques}>Incrementar contador</button> <br /> <br />

            {cont}
        </div>
    )
}

export default ContadorDeCliques