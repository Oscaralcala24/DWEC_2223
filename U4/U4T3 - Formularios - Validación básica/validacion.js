window.onload = iniciarListener;

function iniciarListener(){
    $FORM = document.forms[0];
    $NOMBREDISCO = document.getElementById("nombreDisco");
    $NOMBREGRUPO = document.getElementById("nombreGrupo");
    $ANOPUBLICACION = document.getElementById("anoPublicacion");
    $TIPOMUSICA = document.getElementById("tipoMusica");
    $LOCALIZACION = document.getElementById("estanteria");
    $PRESTADO = document.getElementById("prestado");
    
    $FORM.addEventListener("submit", handleSubmit, false);
}

function handleSubmit(e){
    nombreDisco = $NOMBREDISCO.value;
    nombreGrupo = $NOMBREGRUPO.value;
    anoPublicacion = $ANOPUBLICACION.value;
    tipoMusica = $TIPOMUSICA.value;
    localizacion = $LOCALIZACION.value;
    prestado = $LOCALIZACION.value;
    var valido = true;
    debugger;
    if(nombreDisco == false || isValidNombre(nombreDisco) == false){
        alert("Nombre del disco incorrecto");
        valido = false;
    }
    if(nombreGrupo == false || isValidNombre(nombreGrupo) == false){
        alert("Nombre del grupo incorrecto");
        valido = false;
    }
    if(anoPublicacion == false || isValidAnoPublicacion(anoPublicacion) == false){
        alert("Año de publicacion incorrecto");
        valido = false;
    }
}

function isValidNombre(nombre){
    console.log("Validacion nombre");
    let validacion = /^[a-zA-Z]{1,20}$/;
    return validacion.test(nombre);
}

function isValidAnoPublicacion(publicacion){
    console.log("Validacion publicacion");
    let validacion = /^[0-9]{4}$/;
    return validacion.test(publicacion);
}