import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Alert, Form } from 'react-bootstrap';
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'
import PrecisoEstudar from './components/PrecisoEstudar'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMetros from './components/QuilometroParaMilhas'
import MetrosParaQuilometro from './components/MetrosParaQuilometro'
import ListaDeLivros from './components/ListaDeLivros'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import Mensagem from './components/Mensagem'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import TrabalhandoComImagensCondicionais from './components/TrabalhandoComImagensCondicionais'

const App = () => {
  return (
    <div className='p-6 bg-light shadow rounded'>
      <h1 className='mb-4 text-start text-dark fst-italic border-bottom pb-2 text-center'>Exercicios em React</h1>

      <div className='d-flex flex-column rounded justify-content-center align-items-center bg-primary text-darkblue  w-50 mx-auto'>
        <h1 className='mb-4 text-center text-primary fw-bold text-white'>Ex001 - Componentes de cálculos</h1> <br />
        <Adicao num1={10} num2={5} />
        <Subtracao num1={100} num2={10} />
        <Multiplicacao num1={2} num2={6} />      
        <Divisao num1={16} num2={8}/> <br />
      </div>

      <h1 className='mb-4 text-center text-primary fw-bold'>Ex002</h1>
      <PrecisoEstudar nomeDaTecnologia='React' /> <br />

      <h1 className='mb-4 text-center text-primary fw-bold'>Ex003</h1>
      <CelsiusParaFahrenheit celsius={25} />
      <FahrenheitParaCelsius fahrenheit={77} />
      <QuilometroParaMetros km={1} />
      <MetrosParaQuilometro metros={1000} /> <br />

      <h1 className='mb-4 text-center text-primary fw-bold'>Ex004</h1>
      <ListaDeLivros /> <br />

      <h1 className="mb-4 text-center text-primary fw-bold">Ex005</h1>
      <RenderizandoComFuncoes /> <br />

      <h1 className='mb-4 text-center text-primary fw-bold'>Ex006</h1>
      <Mensagem /> <br />

      <h1 className='mb-4 text-center text-primary fw-bold'>Ex007</h1>
      <TrabalhandoComImagens /> <br />

      <h1 className="mb-4 text-center text-primary fw-bold">Ex008</h1>
      <TrabalhandoComImagensCondicionais />
    </div>
  )
}

export default App