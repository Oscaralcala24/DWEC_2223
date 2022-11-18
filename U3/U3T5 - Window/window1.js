

if(confirm("¿Desea abrir una nueva pestaña?")){
    var nuevaVentana =  window.open('','Ventana en blanco','_parent, width=200, height=80,toolbar=no');
    nuevaVentana.moveTo(500,500);
    nuevaVentana.document.write("<p>Esto es un texto de prueba</p>");
    nuevaVentana.document.write("<button type='button' value='Cerrar' onclick='javascript:window.close()'>Cerrar</button>");
}

debugger


function cerrarVentana() {
    if(nuevaVentana.closed){
        window.alert("La ventana esta cerrada");
    }else{
        nuevaVentana.close();
    }
    
}

function moverVentana() {
    nuevaVentana.moveBy(10,10)
    nuevaVentana.moveTo(100,100)
}

function aumentarVentana() {
    nuevaVentana.resizeBy(10,10)
    
    
}
function aumentarVentana2() {
    nuevaVentana.resizeTo(400,200)
}
function volverArriba() {
    window.scrollTo(0,0)
}
function moverScroll() {
    window.scrollTo(0,10)
}
    