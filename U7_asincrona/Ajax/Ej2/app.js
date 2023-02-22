window.addEventListener('load',iniciar,false);

function iniciar() {
    let boton = document.getElementById('boton');
    boton.addEventListener("click",cargarContenido,false);
}

function cargarContenido() {
    if (window.XMLHttpRequest) {
      peticion_http = new XMLHttpRequest();
    } else {
      alert("No tienes soporte para AJAX");
      return;  // Salimos y no hacemos la petición
    }

    // Preparamos la petición
    if (peticion_http) {
      
      
      
      // en la petición, me suscribo al evento "ReadyStateChange", y le 
      // digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado)
      peticion_http.onreadystatechange = comprobar;
      let input = document.getElementById('localidad').value
      peticion_http.open("GET", `http://localhost:8090/U7_asincrona/Ajax/Ej2/localidad.php?localidad=${input}`, true);
      
      peticion_http.send();
    }
  }
  
  function comprobar() {
    if (peticion_http.readyState === 4) {
        if (peticion_http.status === 200) {        
            let div  = document.getElementById("resultado")
            div.innerHTML = peticion_http.responseText
        }
      }
  }

  
