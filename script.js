const elementoResposta = document.querySelector("#resposta");

const escalasMaiores = [
  "Dó&#9837 Maior",
  "Sol&#9837 Maior",
  "Ré&#9837 Maior",
  "Lá&#9837 Maior",
  "Mi&#9837 Maior",
  "Si&#9837 Maior",
  "Fá Maior",
  "Dó Maior",
  "Sol Maior",
  "Ré Maior",
  "Lá Maior",
  "Mi Maior",
  "Si Maior",
  "Fá&#9839 Maior",
  "Dó&#9839 Maior",
];

const escalasMenores = [
  "Lá&#9837 Menor",
  "Mi&#9837 Menor",
  "Si&#9837 Menor",
  "Fá Menor",
  "Dó Menor",
  "Sol Menor",
  "Ré Menor",
  "Lá Menor",
  "Mi Menor",
  "Si Menor",
  "Fá&#9839 Menor",
  "Dó&#9839 Menor",
  "Sol&#9839 Menor",
  "Ré&#9839 Menor",
  "Lá&#9839 Menor",
];

function escolherEscalaMaior() {
  escalaMaior = true; // Sem palavra reservada para poder chamar ele fora da função
  const totalEscalasMaiores = escalasMaiores.length;
  numeroAleatorioMaiores = Math.floor(Math.random() * totalEscalasMaiores); // Sem palavra reservada para poder chamar ele fora da função

  elementoResposta.innerHTML = escalasMaiores[numeroAleatorioMaiores];
}

function escolherEscalaMenor() {
  escalaMenor = true; // Sem palavra reservada para poder chamar ele fora da função
  const totalEscalasMenores = escalasMenores.length;
  numeroAleatorioMenores = Math.floor(Math.random() * totalEscalasMenores); // Sem palavra reservada para poder chamar ele fora da função

  elementoResposta.innerHTML = escalasMenores[numeroAleatorioMenores];
}

function escolherEscalaRelativa() {
  if (escalaMaior == true) {
    elementoResposta.innerHTML = escalasMenores[numeroAleatorioMaiores];
  } else if (escalaMenor == true) {
    elementoResposta.innerHTML = escalasMaiores[numeroAleatorioMenores];
  }
}
