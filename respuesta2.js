//*Escribe un programa que pregunte el precio, el tanto por ciento dedescuento, y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20%, elprograma dirá que el precio final con descuento es de 240.
// Solicitar al usuario el precio
var precioOriginal = prompt("Introduce el precio:");
// Solicitar al usuario el descuento
var descuento = prompt("introsuce el porentaje de descuento:")
// fuencion para calcular el precio con descuento
function calcularPrecioFinal(precioOriginal, descuento) {
    //pasar el nuemro de descuento  para manejar la formula
    var descuentoDecimal = descuento / 100;
    //formula para calcular el precio
    return precioOriginal - (precioOriginal * descuentoDecimal);
}
//mostrar al usuario el resultado
alert("el precio con decuento es  " + calcularPrecioFinal(precioOriginal, descuento) + ".");