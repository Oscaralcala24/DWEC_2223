//Llamo a la funcion con un intervalo de un segundo
setInterval(darHora,1000);

//Funcion que me añade en el input la hora actual.
function darHora() {
    let fecha = new Date();
    document.getElementById("hora").value = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
}