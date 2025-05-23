import React from 'react'

const RealParaDolar = ({ real }) => {
const dolar = real / 5
    return (
        <div>
            <p>{real} reais equivalem a {dolar} dólares.</p>
        </div>
    )
}

export default RealParaDolar