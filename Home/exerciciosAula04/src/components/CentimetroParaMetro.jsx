import React from 'react'

const CentimetroParaMetro = ({ centimetros }) => {
const metros = centimetros / 100

    return (
        <div>
            <p>{centimetros} cm vale {metros} metros.</p>
        </div>
    )
}

export default CentimetroParaMetro