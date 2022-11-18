/*Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente. Debes escribir al lado si son cm, o cm2, o cm3. Como datos de muestra, si metes 5, deberías obtener aproximadamente:
5 / 10 / 31,41 /78,54 / 314,15 / 523,59.*/

const prompt = require("prompt-sync")({sigint:true})
console.log("Introduce radio:")
let radio = prompt()
//El valor del radio.
console.log(radio + " cm")

//El valor del diámetro.
console.log(radio*2 + " cm")

//El valor del perímetro de la circunferencia.
console.log(2*Math.PI*radio + " cm")

//El valor del área del círculo.
console.log(Math.PI*Math.pow(radio,2) + " cm2")

//El valor del área de la esfera.
console.log(4*Math.PI*Math.pow(radio,2) + " cm2")

//El valor del volumen de la esfera.
console.log(4/3*Math.PI*Math.pow(radio,3) + " cm3")




