import React from 'react'

const StatusConexao = () => {
const conexao = (online) => {
    if (online === true) {
        return <p>Conectado ✅</p>
    } else if (online === false) {
        return <p>Desconectado ❌</p>
    } else {
        return <p>Dado inválido!</p>
    }
  }

  return (
    <div>
      {conexao(true)}
      {conexao(false)}
    </div>
  )
}

export default StatusConexao