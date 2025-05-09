import React from 'react'
import Imagem1 from '../assets/image.png'
import Imagem2 from '../assets/image2.png'
import Imagem3 from '../assets/image3.png'

const GaleriaImagens = () => {
  return (
    <div>
        <img src={Imagem1} alt=""/>
        <img src={Imagem2} alt=""/>
        <img src={Imagem3} alt=""/>
    </div>
  )
}

export default GaleriaImagens