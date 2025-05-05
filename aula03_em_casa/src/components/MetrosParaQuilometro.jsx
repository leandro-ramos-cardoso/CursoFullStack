import React from 'react'

const MetrosParaQuilometro = (props) => {
const km = props.metros / 1000
  return (
    <div>
        <h1>{props.metros} metros equivalem a {km} km</h1>
    </div>
  )
}

export default MetrosParaQuilometro