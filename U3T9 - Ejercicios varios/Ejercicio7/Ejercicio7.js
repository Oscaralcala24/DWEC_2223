//Creo variable con hora actual
var fecha = new Date();
//Muestro hora actual
console.log("Hora actual")
console.log(fecha.toUTCString());

//seteo horas a 26
fecha.setHours(26);
//Muestro fecha, como he seteado horas a mas de 24, me ha sumado un dia.
console.log("Hora actual")
console.log(fecha.toUTCString());

//Muestro fecha, como he seteado minutos a mas de 60, me ha sumado una hora y muestra 5 minutos restantes.
fecha.setMinutes(65);
console.log(fecha.toUTCString());
