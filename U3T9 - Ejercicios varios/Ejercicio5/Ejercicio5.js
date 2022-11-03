//fecha de cumpleaños en milisegundos
let fechaCumpleanos = new Date("2022-12-17").getTime();
//fecha actual en milisegundos
let fechaActual = new Date().getTime();
//Resto los milisegundos
console.log("Quedan " + Number(fechaCumpleanos-fechaActual) + " milisegundos para mi cumpleaños");

