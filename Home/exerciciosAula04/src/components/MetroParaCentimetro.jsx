import React from 'react'

const MetroParaCentimetro = ({ metros}) => {
const centímetros = metros * 100

    return (
        <div>
            <p>{metros} metros vale {centímetros} centímetros.</p>
        </div>
    )
}

export default MetroParaCentimetro