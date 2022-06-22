let nombre = prompt ("Ingrese su nombre")
alert ("Hola" + " " + nombre)

alert ("Elige tu producto")

let seleccionUsuario = parseInt(prompt("Que desea elegir: \n 1.Teclado Logitech \n 2.Mouse Logitech \n 3.Placa de Video \n 4.Memoria \n 5.Disco Rigido \n 6.Gabinete"));
  switch (seleccionUsuario) {
    case 1:
      alert("Usted selecciono Teclado Logitech");
      break;
    case 2:
      alert("Usted selecciono Mouse Logitech");
      break;
    case 3:
      alert("Usted selecciono Placa de Video");
      break;
    case 4:
      alert("Usted selecciono Memoria");
      break;
      case 5:
        alert("Usted selecciono Disco Rigido")
      break;
      case 6:
        alert("Usted selecciono Gabinete")
    default:
      alert("Opción inválida");
      break;
  }



