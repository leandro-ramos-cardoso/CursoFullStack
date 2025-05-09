import React from 'react'

const ImagemCondicional2 = () => {
const EscolheImagem = (tipoImagem) => {
    if(tipoImagem === 'logo'){
        return <img src="1044676.png" alt="" />
    } else if(tipoImagem === 'personagem'){
        return <img src="8792047.png" alt="" />
    } else {
        return <p>Dados inválidos</p>
    }
} 
  return (
    <div>
        {EscolheImagem('logo')}
        {EscolheImagem('personagem')}
    </div>
  )
}

export default ImagemCondicional2