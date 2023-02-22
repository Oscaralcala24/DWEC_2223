window.addEventListener('load', iniciar)

function iniciar() {
    document.getElementById('enviar').addEventListener('click', introducirDatos)
    console.log('iniciar')
}

function introducirDatos() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
        return;
    }
    if (xhr) {
        let inputs = document.getElementsByTagName('input');
        let titulo = inputs[0].value;
        let director = inputs[1].value;
        let cadena = inputs[2].value;
        let anyo = inputs[3].value;
        let terminada = inputs[4].checked;

        let objeto = {
            "titulo": titulo,
            "director": director,
            "cadena": cadena,
            "anyo": parseInt(anyo),
            "terminada": terminada
        };
        xhr.open('POST','create_serie.php')
        xhr.onreadystatechange = comprobar
        let parametros = JSON.stringify(objeto);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(parametros);
    }

}

function comprobar() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let respuesta = xhr.responseText;
        console.log(respuesta);
        const divRespuesta = document.getElementById("respuesta");
        if(respuesta == '"ok"'){
            
            divRespuesta.className = "correcto"
            divRespuesta.innerHTML = respuesta;
        }else{
            
            divRespuesta.className = "incorrecto"
            divRespuesta.innerHTML = "No se ha podido insertar en la BD";
        }
    }
}