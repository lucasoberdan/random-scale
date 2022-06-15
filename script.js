//Quais as variáveis
//Quais os dados de entrada?
//Quais os dados de saída?

const elementoResposta = document.querySelector("#resposta")

const escalaBemol = [
  "Fá",
  "Sol &#9837",
  "Lá &#9837",
  "Si &#9837",
  "Dó &#9837",
  "Ré &#9837",
  "Mi &#9837",
]

const escalaSustenido = [
  "Sol",
  "Lá",
  "Si",
  "Dó &#9839",
  "Ré",
  "Mi",
]

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function escolherEscalaB() {
  const totalEscalasB = escalaBemol.length
  const numeroAleatorioB = Math.floor(Math.random() * totalEscalasB)

  elementoResposta.innerHTML = escalaBemol[numeroAleatorioB]
}

function escolherEscalaS() {
  const totalEscalasS = escalaSustenido.length
  const numeroAleatorioS = Math.floor(Math.random() * totalEscalasS)

  elementoResposta.innerHTML = escalaSustenido[numeroAleatorioS]
}