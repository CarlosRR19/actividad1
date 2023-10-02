const USUARIOS = ["pepe", "paco", "juan", "benito", "manuel"];
const CONTRASENAS = ["12345", "23456", "09876", "67890", "66666"];

function existeLogin(login) {
  var valido = false;
  for (var i = 0; i < USUARIOS.length; i++) {
    if (login == USUARIOS[i]) {
      valido = true;
      break;
    }
  }

  return valido;
}

function passwordCorrecto(password, login) {
  var valido = false;

  for (var i = 0; i < USUARIOS.length; i++) {
    if (login == USUARIOS[i]) {
      if (password == CONTRASENAS[i]) {
        valido = true;
      }
      break;
    }
  }

  return valido;
}

function iniciarSesion() {
  for (var j = 0; j < 5; j++) {
    var login = prompt("Nombre de usuario");
    var password = prompt("Contraseña");

    if (passwordCorrecto(password, login) == true) {
      window.alert("El nombre de usuario y la contraseña son correctos");
      break;
    } else if (existeLogin(login) == false) {
      window.alert("El nombre de usuario no existe");
    } else if (
      passwordCorrecto(login, password) == false &&
      existeLogin(login) == true
    ) {
      window.alert("El nombre de usuario no coincide con la contraseña");
    }
  }
}

iniciarSesion();
