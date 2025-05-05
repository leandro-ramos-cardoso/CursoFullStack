import React from 'react'

const CelsiusParaFahrenheit = (props) => {
const fahrenheit = (props.celsius * 9) / 5 + 32
  return (
    <div>
        <h1>{props.celsius}ºC equivalem a {fahrenheit}ºF</h1>
    </div>
  )
}

export default CelsiusParaFahrenheit