import React from 'react'
import './App.css'
import SomaComEstilo from './components/SomaComEstilo'
import SubtraiComEstilo from './components/SubtraiComEstilo'
import MultiplicaComEstilo from './components/MultiplicaComEstilo'
import DivideComEstilo from './components/DivideComEstilo'
import EstudoHoje from './components/EstudoHoje'
import SegundosParaMinutos from './components/SegundosParaMinutos'
import MinutosParaSegundos from './components/MinutosParaSegundos'
import HorasParaSegundos from './components/HorasParaSegundos'
import SegundosParaHoras from './components/SegundosParaHoras'
import ListaDeFilmesDetalhados from './components/ListaDeFilmesDetalhados'
import MensagemClima from './components/MensagemClima'
import DesejoDoDia from './components/DesejoDoDia'
import AnimalFavorito from './components/AnimalFavorito'
import GaleriaImagens from './components/GaleriaImagens'
import GaleriaImagensPublic from './components/GaleriaImagensPublic'
import ImagemCondicional2 from './components/ImagemCondicional2'
import ListaDeFrutas from './components/ListaDeFrutas'
import ContatoUsuario from './components/ContatoUsuario'
import Produto from './components/Produto'
import MensagemNota from './components/MensagemNota'
import CorFavorita from './components/CorFavorita'
import SaudacaoHorario from './components/SaudacaoHorario'
import StatusConexao from './components/StatusConexao'
import NomeCompleto from './components/NomeCompleto'
import MensagemEmoji from './components/MensagemEmoji'
import ListaProdutos from './components/ListaProdutos'

const App = () => {
  return (
    <div>
      <SomaComEstilo num1={5} num2={15}/>
      <SubtraiComEstilo num1={100} num2={10} />
      <MultiplicaComEstilo num1={5} num2={5} />
      <DivideComEstilo num1={16} num2={4} />
      <EstudoHoje nomeDaTecnologia='React'/>
      <SegundosParaMinutos segundos={120} />
      <MinutosParaSegundos minutos={2} />
      <HorasParaSegundos horas={2} />
      <SegundosParaHoras segundos={7200} />
      <ListaDeFilmesDetalhados />
      <MensagemClima />
      <DesejoDoDia mensagem='Mensagem teste' />
      <AnimalFavorito />
      <GaleriaImagens />
      <GaleriaImagensPublic />
      <ImagemCondicional2 />
      <ListaDeFrutas nomeFruta={['Maçã', 'Banana', 'Laranja', 'Morango']}/>
      <ContatoUsuario nome='Leandro' email='teste@gmail.com' telefone='11999999999'/>
      <Produto nome='Produto 1' preco={10} descricao='Descrição do produto 1'/>
      <MensagemNota />
      <CorFavorita cor="yellowgreen" />
      <SaudacaoHorario />
      <StatusConexao />
      <NomeCompleto nome='Leandro' sobrenome='Ramos Cardoso' />
      <MensagemEmoji mensagem='Teste 1,2,3' emoji="😄" />
      <ListaProdutos nomeProduto={['Computador', 'Teclado']}/>
      
    </div>
  )
}

export default App