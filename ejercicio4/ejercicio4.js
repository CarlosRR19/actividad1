const OPERADORES = ["+", "-", "*", "/", "FIN"];
var operador = prompt("Introduce un operador");

function validarOperador(operador) {
  var valido = false;

  for (var i = 0; i < OPERADORES.length; i++) {
    if (operador == OPERADORES[i]) {
      valido = true;
      break;
    }
  }

  return valido;
}

function divisonValida(dividendo, divisor) {
  var valido = false;
  if (divisor != 0) {
    valido = true;
  }

  return valido;
}

function calcular(operador) {
  do {
    do {
      validarOperador(operador);

      if (validarOperador(operador) == false) {
        operador = prompt("Operador inválido");
      }
    } while (validarOperador(operador) == false);

    if (operador == "FIN") {
      break;
    }

    var operandoP = parseInt(prompt("Introduce un operando"));
    var operandoS = parseInt(prompt("Introduce un operando"));

    switch (operador) {
      case "+":
        console.log(operandoS + operandoP);
        operador = prompt("Introduce un operador");
        break;

      case "-":
        console.log(operandoP - operandoS);
        operador = prompt("Introduce un operador");
        break;

      case "*":
        console.log(operandoP * operandoS);
        operador = prompt("Introduce un operador");
        break;

      case "/":
        do {
          if (divisonValida(operandoP, operandoS) == false) {
            operandoS = prompt("Divisor inválido");
          }
        } while (divisonValida(operandoP, operandoS) == false);
        console.log(operandoP / operandoS);
        operador = prompt("Introduce un operador");
        break;

      case "FIN":
        break;
    }
  } while (operador != "FIN");
}

calcular(operador);
