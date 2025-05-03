import React from 'react'

const Mensagem = () => {

const avisoMensagem = (tipo) => {
    if(tipo === 'Sucesso'){
        return <h1 style={{ color: 'lightgreen' }}>Dados enviados com sucesso!</h1>
    } else if(tipo === 'Erro') {
        return <h1 style={{ color: 'red' }}>Algo deu errado.</h1>
    } else if(tipo === 'Aviso') {
        return <h1 style={{ color: 'orange' }}>Atenção! Revise os dados.</h1>
    } else {
        return <h1>Tipo de mensagem inválido.</h1>
    }
}
  return (
    <div>
        {avisoMensagem('Sucesso')}
        {avisoMensagem('Erro')}
        {avisoMensagem('Aviso')}
        {avisoMensagem('Outro')}
    </div>
  )
}

export default Mensagem