window.onload = iniciar();

function iniciar() { // Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra.
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    li.textContent = "Ejemplo";
    ul.appendChild(li);
    document.body.appendChild(ul);


    // Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
    // Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
    let boton = document.createElement("button");
    boton.textContent = "Introducir li";
    document.body.appendChild(boton);


    boton.addEventListener("click", function () {
        let promptAux = prompt("Introduce un texto");
        let liAux = document.createElement("li");
        liAux.textContent = promptAux;
        ul.appendChild(liAux);
    }, false)


    // Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que cuando pulses el primer botón borre el primer elemento de la lista y cuando pulses el último borre el último elemento de la lista.
    let botonBorrarPri = document.createElement("button");
    let botonBorrarUlt = document.createElement("button");

    botonBorrarPri.textContent = "Borrar primer li";
    botonBorrarUlt.textContent = "Borrar ultimo li";
    document.body.appendChild(botonBorrarPri);
    document.body.appendChild(botonBorrarUlt);


    botonBorrarPri.addEventListener("click", function () {
        if (ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild);
        } else {
            console.log("No tiene mas li");
        }
    }, false)
    botonBorrarUlt.addEventListener("click", function () {
        if (ul.hasChildNodes()) {
            ul.removeChild(ul.lastChild);
        } else {
            console.log("No tiene mas li");
        }
    }, false)
}
