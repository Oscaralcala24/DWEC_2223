/*Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

15/10/2020
Jueves, 15 de octubre de 2020.
Thursday, October 15, 2020.*/
const prompt = require("prompt-sync")({sigint:true})
let dia = prompt("Introduce dia: ")
let mes = prompt("Introduce mes: ")
let ano = prompt("Introduce año: ")
let fecha = new Date(ano,mes,dia)
let fecha2 = 0
console.log(fecha.toLocaleDateString())
console.log(fecha.toDateString())
