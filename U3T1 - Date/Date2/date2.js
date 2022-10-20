/*Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.

Recuerda que los meses empiezan desde el número 0.*/
var fechaIntroducida = Number(prompt("Introduce tu fecha cumpleaños"))
var diaCumpleanos = new Date("2022-"+fechaIntroducida)
let fechaFin = new Date("2100-01-01")
let diferenciaAnos = Number(fechaFin.getFullYear())-Number(diaCumpleanos.getFullYear())
var arrayAnos = {}
for (let index = 0; index < diferenciaAnos; index++) {
    diaCumpleanos.setFullYear(diaCumpleanos.getFullYear()+index)
    if(diaCumpleanos.getDay() == 6){
        arrayAnos.push(diaCumpleanos.getFullYear)
    }
    
}
console.log(arrayAnos)