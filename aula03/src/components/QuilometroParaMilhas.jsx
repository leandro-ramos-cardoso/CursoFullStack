import React from 'react'

const QuilometroParaMilhas = (props) => {
const milhas = (props.km * 0,621371)
  return (
    <div>
        <h1>{props.km} km equivalem a {milhas} metros</h1>
    </div>
  )
}

export default QuilometroParaMilhas