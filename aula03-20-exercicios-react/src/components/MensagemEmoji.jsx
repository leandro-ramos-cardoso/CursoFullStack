import React from 'react'

const MensagemEmoji = (props) => {
  return (
    <div>
        <p>{props.mensagem} {props.emoji}</p>
    </div>
  )
}

export default MensagemEmoji