//Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)).
var R1 = parseFloat(prompt("Introduce la resistencia 1:"));
var R2 = parseFloat(prompt("Introduce la resistencia 2:"));
// Verificar que las conversiones fueron exitosas
if (isNaN(R1) || isNaN(R2)) {
    // Si alguno de los valores no es un número, mostrar un mensaje de error
    alert("Por favor, introduce números válidos.");
} else {
    // Calcular el la fomula 
    var Req =(R1*R2)/(R1+R2);
    // Mostrar al usuario el resultado
    alert("El promedio es: " + Req + ".");
}