import React from 'react'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import ListaDeLivros from './components/ListaDeLivros'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import Mensagem from './components/Mensagem'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import TrabalhandoComImagensCondicionais from './components/TrabalhandoComImagensCondicionais'

const App = () => {
  return (
    <div>
      {/* <CelsiusParaFahrenheit celsius={25} />
      <FahrenheitParaCelsius fahrenheit={10} />
      <QuilometroParaMilhas km={2} /> */}
      
      {/* <ListaDeLivros/> */}
      {/* <RenderizandoComFuncoes /> */}
      {/* <Mensagem/> */}

      {/* <TrabalhandoComImagens /> */}
      <TrabalhandoComImagensCondicionais imagem={'Public'}/>
    </div>
  )
}

export default App