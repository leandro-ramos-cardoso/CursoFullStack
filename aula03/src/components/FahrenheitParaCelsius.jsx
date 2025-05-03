import React from 'react'

const FahrenheitParaCelsius = (props) => {
const celsius = (((props.fahrenheit - 32) * 5) / 9).toFixed(2)

  return (
    <div>
        <h1>{props.fahrenheit}ºF é o mesmo que {celsius}</h1>
    </div>
  )
}

export default FahrenheitParaCelsius