import React from 'react'

const QuilometroParaMetros = (props) => {
const metros = props.km * 1000
  return (
    <div>
        <h1>{props.km} km equivalem a {metros} metros</h1>
    </div>
  )
}

export default QuilometroParaMetros