import React from 'react'
import ImagemImportada from '../assets/img-asset.jpg'

const TrabalhandoComImagensCondicionais = () => {

const escolhaImagens = (imagem) => {
    if(imagem === 'Public'){
        <img src="/img-public.jpg" alt="" />
    } else if(imagem === 'Assets'){
        <img src={ImagemImportada}  alt=''/>
    }
}
  return (
    <div>

    </div>
  )
}

export default TrabalhandoComImagensCondicionais