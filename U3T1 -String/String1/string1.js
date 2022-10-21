/*Crea un programa que pida al usuario su nombre y apellidos y muestre:

El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.*/


const prompt = require("prompt-sync")({sigint:true})

console.log("Introduce nombre y apellidos")
var nombreCompleto = prompt()

//El tamaño del nombre más los apellidos (sin contar espacios).
console.log(nombreCompleto.replaceAll(" ","").length)

//La cadena en minúsculas y en mayúsculas.
console.log(nombreCompleto.toLowerCase())
console.log(nombreCompleto.toUpperCase())

//Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
let arrayAux = nombreCompleto.split(" ")
console.log("Nombre: " + arrayAux[0])
console.log("Apellido1: " + arrayAux[1])
console.log("Apellido2: " + arrayAux[2])

//Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
//Uso el array anterior
let propuestaNombre = ""
propuestaNombre += arrayAux[0].slice(0,1)
propuestaNombre += arrayAux[1]
propuestaNombre += arrayAux[2].slice(0,1)
console.log(propuestaNombre.toLowerCase())

//Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.*/
let propuestaNombre2 = ""
propuestaNombre2 += arrayAux[0].slice(0,3)
propuestaNombre2 += arrayAux[1].slice(0,3)
propuestaNombre2 += arrayAux[2].slice(0,3)
console.log(propuestaNombre2.toLowerCase())