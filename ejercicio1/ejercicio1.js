var numero = prompt("Introduce un número entero");

function esEntero(numero) {
  var entero = false;
  var numeroCopia = numero;
  if (numero == parseInt(numeroCopia)) {
    entero = true;
  }
  return entero;
}

function esPositivo(numero) {
  var positivo = false;
  if (numero > 0) {
    positivo = true;
  }
  return positivo;
}

function sumatorio(numero) {
  suma = 0;
  for (var i = 0; i <= numero; i++) {
    suma += i;
  }

  return suma;
}

console.log(
  "[Entero: " +
    esEntero(numero) +
    "] [Positivo: " +
    esPositivo(numero) +
    "] [Sumatorio: " +
    sumatorio(numero) +
    "]"
);
