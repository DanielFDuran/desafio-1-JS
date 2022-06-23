let nombre = prompt ("Ingrese su nombre")
alert ("Hola" + " " + nombre)

let ventaTotal = prompt(" Ventas total del local ")
let ventaVendedor = prompt (" Ingresar venta del vendedor ")

function calculo () {
    if (ventaTotal >=4000000){
        comision = ventaVendedor *0.1;
    }
    else if (ventaTotal >=2000000) {
        comision = ventaVendedor *0.05;
    }
    else {
        comision = ventaVendedor *0.02;
    }
    alert (`${nombre} la comision es : ${comision}`);
}
calculo ()