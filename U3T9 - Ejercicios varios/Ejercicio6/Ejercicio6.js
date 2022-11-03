//Creo variable de guardando los milisegundos cuando la pagina se abre
var paginaAbierta = new Date().getTime();
console.log(paginaAbierta);

//Funcion que crea variable para guardar milisegundos cuando se pulsa el boton y muestra la diferencia en milisegundos.
function calcular(){
    var botonPulsado = new Date().getTime();
    console.log(botonPulsado);
    console.log(paginaAbierta);
    alert("El tiempo transcurrido entre abrir la pagina y pulsar el boton en milisegundos ha sido de: " + Number(botonPulsado-paginaAbierta));
}