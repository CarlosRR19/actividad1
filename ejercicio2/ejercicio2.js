let numeros = [];

for (var i = 0; i < 4; i++) {
  numeros[i] = prompt("Introduce un número");
  let correcto = false;

  do {
    let numero = parseInt(numeros[i]);
    if (numeros[i] < 1 || numero != numeros[i]) {
      alert("Este número [" + numeros[i] + "] no es entero o positivo");
      numeros[i] = prompt("Introduce otro número");
    } else {
      correcto = true;
    }
  } while (correcto == false);
}

function orderCreciente(numeros) {
  var orden = true;
  for (var i = 0; i < 4; i++) {
    if (i > 0 && numeros[i] >= numeros[i - 1]) {
      orden = false;
    }
  }

  return orden;
}

console.log("Order Creciente:" + orderCreciente(numeros))