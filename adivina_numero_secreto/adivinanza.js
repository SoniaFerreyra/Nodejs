const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {
    console.log(" ");
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
    console.log(" ");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
    console.log(" ");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
    console.log(" ");
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
