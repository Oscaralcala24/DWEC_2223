//Creo fecha predefinida
var fecha = new Date("2018-02-20");
//Muestro fecha sin modificar
console.log(fecha.toUTCString());
//Seteo dia del mes a 35
fecha.setDate(35);
// Muestra fecha modificada dando como resultado un mes mas, con el dia 7 ya que he sumado 35 dias a febrero que tiene 28, 35 - 28 = 7 dias del mes siguiente
console.log(fecha.toUTCString());