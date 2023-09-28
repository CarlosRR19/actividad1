const MAXIMO = 100;
const MINIMO = 1;
const DIVISORES = [2, 3, 5, 10];

var numero = prompt("Introduce un número entre " + MINIMO + " y " + MAXIMO);

if (numero < 1 || numero > 100) {
  do {
    numero = prompt("Número inválido, introduce un nuevo número");
  } while (numero < 1 || numero > 100);
}

function esDivisible(numero, divisor) {
  if (numero % divisor == 0) {
    return true;
  } else {
    return false;
  }
}

var resultado = [];

for (var i = 0; i < DIVISORES.length; i++) {
  resultado += (
    "El número " +
      numero +
      " es divisible por " +
      DIVISORES[i] +
      ": " +
      esDivisible(numero, DIVISORES[i])
  + "\n");
}

window.alert(resultado);