import React from 'react'

const Mensagem = () => {
const escolhaMensagem = (tipo) => {
    if(tipo === 'sucesso'){
        return <h1>Dados enviados com sucesso!</h1>
    } else if(tipo === 'erro'){
        return <h2>Algo deu errado.</h2>
    } else if(tipo === 'aviso'){
        return <h3>Atenção! Revise os dados.</h3>
    } else {
        return <h3>Tipo de mensagem inválido.</h3>
    }
}
  return (
    <div>
        {escolhaMensagem('sucesso')}
        {escolhaMensagem('erro')}
        {escolhaMensagem('aviso')}
        {escolhaMensagem('teste')}
    </div>
  )
}

export default Mensagem