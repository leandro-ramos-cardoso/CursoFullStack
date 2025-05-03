import React from 'react'

const RenderizandoComFuncoes = () => {

const escolhaDeRedenrizacao = (oQueRenderizar) => {
    if(oQueRenderizar === 'PB'){
        return <h1>Paraiba</h1>
    } else {
        return <h2>João Pessoa</h2>
    }
}
  return (
    <div>
        {escolhaDeRedenrizacao('Teste')}
        {escolhaDeRedenrizacao('PB')}
    </div>
  )
}

export default RenderizandoComFuncoes