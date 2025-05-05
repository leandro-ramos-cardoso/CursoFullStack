import React from 'react'
import ImagemAsset from '../assets/imageAssets.png'

const TrabalhandoComImagensCondicionais = () => {
const escolhaDeImagem = (image) => {
    if(image === 'public'){
        return <img src="image.png" alt="" />
    } else if (image === 'asset') {
        return <img src={ImagemAsset} alt="" />
    } else {
        return <h3>Imagem não encontrada.</h3>
    }
}
  return (
    <div>
        {escolhaDeImagem('public')}
        {escolhaDeImagem('asset')}
        {escolhaDeImagem('outro')}
    </div>
  )
}

export default TrabalhandoComImagensCondicionais