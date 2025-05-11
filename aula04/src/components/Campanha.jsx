import React from 'react'
import styles from './Campanha.module.css'

const Campanha = ({ mes }) => {

function defineMensagem(mesDaCampanha) {
    if(mesDaCampanha === 'setembro') {
        return 'Prevencao Ao Suicidio'
    } else if (mesDaCampanha === 'outubro') {
        return 'Conscientizacao sobre o cancer de mama'
    } else if (mesDaCampanha === 'novembro') {
        return 'Prevencao e combate ao cancer de prostata'
    }
}

function defineCorDeFundo(mesDaCampanha) {
    if(mesDaCampanha === 'setembro') {
        return styles.setembro
    } else if (mesDaCampanha === 'outubro') {
        return styles.outubro
    } else if (mesDaCampanha === 'novembro') {
        return styles.novembro
    }
}
  return (
    <div className={defineCorDeFundo(mes)}>
        {defineMensagem(mes)}
    </div>
  )
}

export default Campanha