import React from 'react'

const MensagemClima = () => {
const verificaClima = (tipoClima) => {
    if(tipoClima === 'sol'){
        return <p>Dia ensolarado ☀️</p>
    }else if(tipoClima === 'chuva'){
        return <p>Leve seu guarda-chuva ☔</p>
    }else if(tipoClima === 'nublado'){
        return <p>Dia nublado ⛅</p>
    }else{
        return <p>Dado inválido</p>
    }
}
  return (
    <div>
         <p>{verificaClima('sol')}</p>
         <p>{verificaClima('chuva')}</p>
         <p>{verificaClima('nublado')}</p>
         <p>{verificaClima('teste')}</p>
    </div>
  )
}

export default MensagemClima