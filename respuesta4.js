//Suponiendo que 1 euro = 1.33250 dólares. Escribe un programa que pida al usuario un número de dólares y calcule el cambio en euros.
// Solicitar al usuario los números enteros
// Solicitar al usuario los números enteros
var numero1 = parseFloat(prompt("Introduce el numero 1:"));
var numero2 = parseFloat(prompt("Introduce el numero 2:"));
var numero3 = parseFloat(prompt("Introduce el numero 3:"));
var numero4 = parseFloat(prompt("Introduce el numero 4:"));
// Verificar que las conversiones fueron exitosas
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
    // Si alguno de los valores no es un número, mostrar un mensaje de error
    alert("Por favor, introduce números válidos.");
} else {
    // Calcular el promedio
    var promedio = (numero1 + numero2 + numero3 + numero4) / 4;

    // Mostrar al usuario el resultado
    alert("El promedio es: " + promedio + ".");
}