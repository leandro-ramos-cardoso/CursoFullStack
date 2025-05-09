****# 🚀 NOVA LISTA DE EXERCÍCIOS – REACT (NÍVEL INICIAL)

## 1. Operações Aritméticas com Estilo
Crie componentes: `SomaComEstilo`, `SubtraiComEstilo`, `MultiplicaComEstilo`, `DivideComEstilo`.  
Cada um recebe `num1` e `num2` como props e renderiza o resultado em uma tag `<p>` com uma cor diferente.

---

## 2. Frase de Estudo Personalizada
Crie um componente `EstudoHoje`. Ele deve renderizar:  
> Hoje eu quero estudar: NOME-DA-TECNOLOGIA  
Recebe `nomeDaTecnologia` como prop.

---

## 3. Conversões de Unidades de Tempo
Crie os componentes:
- `SegundosParaMinutos`, `MinutosParaSegundos`, `HorasParaSegundos`, `SegundosParaHoras`  
Use props para passar os valores. Exiba o resultado como:
> 3600 segundos equivalem a 1 hora

---

## 4. Lista de Filmes com Gênero
Crie um componente `FilmeDetalhado` com props: `titulo`, `genero`, `ano`.  
Crie `ListaDeFilmesDetalhados` para renderizar uma lista de filmes com essas infos.

---

## 5. Mensagem de Clima
Crie um componente `MensagemClima` que recebe `tipoClima` como prop.  
Se `tipoClima === 'sol'`, renderiza: "Dia ensolarado ☀️"  
Se `chuva`, "Leve seu guarda-chuva ☔"  
Se `nublado`, "Dia nublado ⛅"

---

## 6. Desejo do Dia
Componente `DesejoDoDia` recebe prop `mensagem`.  
Renderize a mensagem dentro de uma tag `<h1>`.

---

## 7. Renderizar Animal Favorito
Componente `AnimalFavorito` recebe uma prop `animal`.  
Se `cachorro`, renderize "🐶 Eu amo cachorros!"  
Se `gato`, "🐱 Eu amo gatos!"  
Senão, "🐾 Amo todos os animais!"

---

## 8. Galeria de Imagens
Componente `GaleriaImagens`: renderiza 3 imagens importadas dos assets.  
Use props para passar os caminhos das imagens.

---

## 9. Galeria Pública
Mesmo exercício anterior, mas usando imagens da pasta `public`.

---

## 10. Imagem Alternativa
Componente `ImagemCondicional2`:  
Se prop `tipoImagem === "LOGO"`, mostra imagem do logo da sua aplicação  
Se `"PERSONAGEM"`, mostra uma imagem de personagem

---

## 11. Renderização de Frutas
Componente `ListaDeFrutas` recebe um array de frutas (ex: "Banana", "Maçã") e renderiza cada uma dentro de uma `<li>`.

---

## 12. Contato de Usuário
Componente `ContatoUsuario` recebe props `nome`, `email`, `telefone`.  
Renderize os dados dentro de uma `<div>`.

---

## 13. Produto na Vitrine
Componente `Produto` recebe `nome`, `preco`, `categoria` como props e exibe dentro de uma caixa `<div>` estilizada.

---

## 14. Lista de Produtos
Componente `ListaProdutos` recebe um array de produtos e renderiza um `Produto` para cada item.

---

## 15. Renderização com Nota
Componente `MensagemNota` recebe uma prop `nota`.  
Se nota >= 7: "Aprovado"  
Se nota >= 5: "Recuperação"  
Senão: "Reprovado"

---

## 16. Cores Preferidas
Componente `CorFavorita` recebe `cor` como prop.  
Renderize um quadrado `<div>` com a cor passada como `backgroundColor`.

---

## 17. Saudação com Horário
Componente `SaudacaoHorario` recebe `hora` como prop.  
Se hora < 12: "Bom dia!"  
12 <= hora < 18: "Boa tarde!"  
hora >= 18: "Boa noite!"

---

## 18. Status de Conexão
Componente `StatusConexao` recebe `online` (true ou false).  
Renderize "Conectado ✅" se `true` e "Desconectado ❌" se `false`.

---

## 19. Componente Nome Completo
Componente `NomeCompleto` recebe `nome` e `sobrenome` e renderiza:
> Seu nome completo é: Nome Sobrenome

---

## 20. Mensagem com Emoji
Componente `MensagemEmoji` recebe `mensagem` e `emoji` como props e exibe:
> mensagem + emoji

Exemplo:
```jsx
<MensagemEmoji mensagem="Estou animado" emoji="😄" />