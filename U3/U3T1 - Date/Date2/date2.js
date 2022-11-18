/*Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.

Recuerda que los meses empiezan desde el número 0.*/
const prompt = require("prompt-sync")({sigint:true})
var fechaIntroducida = prompt("Introduce tu fecha cumpleaños Formato yyyy-mm-dd: ")
var fecha = new Date(fechaIntroducida)
let fechaFin = new Date('2100-01-01');
let arrayAnosDomingo = []
//Compruebo que el año introducido es mayor a la fecha actual
while(fecha.getFullYear() < fechaFin.getFullYear()){
    //Compruebo si coincide en domingo
    if(fecha.getDay() == 0){
        arrayAnosDomingo.push(fecha.getFullYear());
    }
    //Sumo año en el for
    fecha.setFullYear(fecha.getFullYear()+1)
}
console.log(arrayAnosDomingo)