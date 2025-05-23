import React from 'react'
import OlaUsuario from './components/OlaUsuario'
import Potenciacao from './components/Potenciacao'
import RaizQuadrada from './components/RaizQuadrada'
import Dobro from './components/Dobro'
import Metade from './components/Metade'
import ListaDeFilmes from './components/ListaDeFilmes'
import MensagemClima from './components/MensagemClima'
import Destino from './components/Destino'
import StatusPedido from './components/StatusPedido'
import MetroParaCentimetro from './components/MetroParaCentimetro'
import CentimetroParaMetro from './components/CentimetroParaMetro'
import RealParaDolar from './components/RealParaDolar'
import DolarParaReal from './components/DolarParaReal'
import ComponenteInline from './components/ComponenteInline'
import ComponenteInlineDinamico from './components/ComponenteInlineDinamico'
import DiaDaSemana from './components/DiaDaSemana'
import TemperaturaEstacao from './components/TemperaturaEstacao'
import ContadorDeCliques from './components/ContadorDeCliques'

const App = () => {
  return (
    <div>
      <OlaUsuario/>
      <Potenciacao numero={2}/>
      <RaizQuadrada numero={16}/>
      <Dobro numero={10}/>
      <Metade numero={30}/>
      <ListaDeFilmes/>
      <MensagemClima clima={'chuvaa'}/> 
      <Destino/>
      <StatusPedido status={'pendente'}/>
      <MetroParaCentimetro metros={10}/>
      <CentimetroParaMetro centimetros={200}/>
      <RealParaDolar real={100}/>
      <DolarParaReal dolar={20}/>
      <ComponenteInline />
      <ComponenteInlineDinamico ativo='false'/>
      <DiaDaSemana dia='domingo'/>
      <TemperaturaEstacao/>
      <ContadorDeCliques/>
    </div>
  )
}

export default App