/*Crea un programa que pida al usuario un número entero por pantalla y muestre:

Su valor exponencial.
El número con 4 decimales.
El número en binario.
El número en octal.
El número en hexadecimal.
Utiliza para ello los métodos del objeto Number.

Como datos de muestra, si metes 50, deberías obtener:

5e1 / 50.0000 / 00110010 / 62 / 0x32*/


const prompt = require("prompt-sync")({sigint:true})
 //Usuario introduce un numero
console.log("Introduce numero: ")
let numero = Number(prompt())


//Su valor exponencial.
console.log(numero.toExponential())

//El número con 4 decimales.
console.log(numero.toFixed(4))

//El número en binario.
console.log(numero.toString(2))

//El número en octal.
console.log(numero.toString(8))

//El número en hexadecimal.
console.log(numero.toString(16))
