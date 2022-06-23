let nombre = prompt ("Ingrese su nombre")
alert ("Hola" + " " + nombre)

alert ("Ganaste 2 productos de Computacion")

alert ("Elige el 1er producto")

let seleccion = parseInt(prompt("Que desea elegir: \n 1.Teclado Logitech \n 2.Mouse Logitech \n 3.Placa de Video \n 4.Memoria \n 5.Disco Rigido \n 6.Gabinete"));
  
switch (seleccion) {
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

alert("Elige 2do producto")

let seleccionar = parseInt(prompt("Que desea elegir: \n 1.Teclado Logitech \n 2.Mouse Logitech \n 3.Placa de Video \n 4.Memoria \n 5.Disco Rigido \n 6.Gabinete"));

switch (seleccionar) {
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

  alert("Gracias por tu eleccion")

  do {
    fin = prompt("Finalizar eleccion (E para Finalizar )");
    alert("El usuario ingresó " + fin);
  } 
    while (fin != "E");


