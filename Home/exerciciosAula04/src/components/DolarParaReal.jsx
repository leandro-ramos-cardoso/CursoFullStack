import React from 'react'

const DolarParaReal = ({ dolar }) => {
const real = dolar * 5
    return (
        <div>
            <p>{dolar} dolares valem {real} reais.</p>
        </div>
    )
}

export default DolarParaReal