let numeros = [];

for (var i = 0; i < 4; i++) {
    numeros = prompt("Introduce un número");
    let numero = parseInt(numeros[i])
    if(numeros[i] < 1 || ( numero != numeros[i])){
        alert("Este número [" + numeros[i] + "] no es entero o positivo");
    }
}
