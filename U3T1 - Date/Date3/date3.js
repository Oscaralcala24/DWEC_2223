/*Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

15/10/2020
Jueves, 15 de octubre de 2020.
Thursday, October 15, 2020.*/
const prompt = require("prompt-sync")({sigint:true})

let dia = Number(prompt("Introduce dia: "))
let mes = Number(prompt("Introduce mes: "))-1
let ano = Number(prompt("Introduce año: "))
let fecha = new Date(ano,mes,dia)

//15/10/2020
console.log(fecha.toLocaleDateString())

//Jueves, 15 de octubre de 2020.

let mapaDias = {0 : "Domingo", 1 : "Lunes", 2 : "Martes", 3 : "Miercoles", 4 : "Jueves",5 : "Viernes",6 : "Sabado"}
let mapaMeses ={0: "Enero", 1: "Febrero", 2: "Marzo", 3 : "Abril", 4 : "Mayo", 5: "Junio", 6 : "Julio", 7 : "Agosto", 8 : "Septiembre", 9 : "Octubre", 10 : "Noviembre", 11 : "Diciembre"}
console.log(mapaDias[fecha.getDay()]+ ", " + fecha.getDate() + " de " + mapaMeses[fecha.getMonth()] + " de " + fecha.getFullYear())

//Thursday, October 15, 2020.*/

let mapaDiasIngles = {0 : "Sunday", 1 : "Monday", 2 : "Tuesday", 3 : "Wednesday", 4 : "Thursday",5 : "Friday",6 : "Saturday"}
let mapaMesesIngles ={0: "January", 1: "February", 2: "March", 3 : "April", 4 : "May", 5: "June", 6 : "July", 7 : "August", 8 : "September", 9 : "October", 10 : "November", 11 : "December"}
console.log(mapaDiasIngles[fecha.getDay()]+ ", " +mapaMesesIngles[fecha.getMonth()]+ " "+ fecha.getDate()  + ", " + fecha.getFullYear())
