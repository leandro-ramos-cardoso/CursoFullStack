## 📝 Lista de Exercícios - ReactJS (Complementar Aula 03 e 04)

---

### 🚀 Componentes e Props

1. Crie um componente chamado `OlaUsuario` que recebe uma prop `nome` e renderiza a frase: "Olá, NOME! Seja bem-vindo(a)!" em uma tag `<h1>`.

2. Crie 4 componentes: `Potenciacao`, `RaizQuadrada`, `Dobro` e `Metade`. Cada um recebe uma prop `numero` e retorna o cálculo respectivo.

3. Crie um componente `Filme` que recebe `titulo`, `diretor` e `ano` como props e exibe essas informações em uma `<div>`.

4. Crie um componente `ListaDeFilmes` que recebe um array de objetos filmes e renderiza vários componentes `Filme`.

5. Crie um componente chamado `MensagemClima`. Se a prop `clima` for "sol", renderiza "Dia de praia ☀️". Se for "chuva", renderiza "Leve o guarda-chuva ☔️".

---

### 🔥 Renderização Condicional com Funções

6. Crie um componente `Destino` com uma função `mostrarDestino(pais)`. Se `pais` for "BR", retorna `<h1>Brasil</h1>`. Senão, retorna `<h2>Exterior</h2>`. Use essa função dentro do JSX duas vezes.

7. Crie um componente `StatusPedido`. Se a prop `status` for `"enviado"`, mostra "Seu pedido foi enviado! 📦". Se `"pendente"`, mostra "Seu pedido está em processamento ⏳". Se `"cancelado"`, mostra "Seu pedido foi cancelado ❌".

---

### 🌡️ Conversores

8. Crie dois componentes: `MetroParaCentimetro` e `CentimetroParaMetro`. Eles recebem um valor e fazem a conversão.

9. Crie dois componentes: `RealParaDolar` e `DolarParaReal`. Eles recebem um valor e convertem utilizando uma taxa fixa de câmbio (ex: 1 dólar = 5 reais).

---

### 🎨 CSS Global

10. Crie um CSS global onde:
- Cor de fundo: #ffe4b5
- Fonte padrão: 18px
- Todos os títulos (`<h1>`, `<h2>`, ...) devem estar centralizados com a cor #333.
- Crie um componente para testar se o CSS está funcionando.

---

### 🎨 CSS Inline e Inline Dinâmico

11. Crie um componente com estilo inline:
- Texto verde
- Fundo amarelo
- Altura de 120px
- Texto centralizado

12. Crie um estilo inline dinâmico onde:
- Se a prop `ativo` for `true`: fundo verde e texto branco.
- Se `false`: fundo cinza e texto preto.

---

### 🎨 CSS Module

13. Crie um componente `DiaDaSemana` que recebe a prop `dia` e, de acordo com o dia, muda a cor de fundo e exibe uma mensagem.
- Segunda → azul → "Começo da semana!"
- Sexta → verde → "Sextou!"
- Domingo → vermelho → "Dia de descanso!"

14. Crie um componente `TemperaturaEstacao` que recebe a prop `estacao` e muda a cor de fundo:
- Verão → laranja
- Inverno → azul claro
- Outono → marrom
- Primavera → verde

---

### 🔢 Hooks - useState

15. Crie um contador chamado `ContadorDeCliques` com um botão que incrementa um contador de cliques.

16. Crie um componente `SorteadorDeNumeros` que sorteia um número de 1 a 100 e exibe na tela cada vez que clicar no botão "Sortear".

17. Crie um componente `SorteadorDeDados` que simula o lançamento de um dado (1 a 6) e armazena os resultados em um array.

---

### 📑 Formulários

18. Crie um componente `FormularioDeFeedback` com os campos:
- Nome
- Feedback (textarea)
- Botão "Enviar"

Ao enviar, exibir o JSON no console com os dados preenchidos.

19. Crie um componente `FormularioDeLogin` com campos:
- Email
- Senha

Ao enviar, mostrar no console o JSON com as credenciais.

20. Crie um simulador de postagem chamado `PostarComentario`. Campos:
- Nome
- Comentário

Ao enviar, o comentário deve ser exibido abaixo do formulário na própria tela (não no console).

---
🧠 **Dica:** Use os conceitos de componentes, props, renderização condicional, CSS Global, CSS Module, useState e eventos onSubmit/onChange que você aprendeu nas aulas!