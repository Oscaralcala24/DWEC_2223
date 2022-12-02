
    window.onload = cargarEventos;
    function cargarEventos() {
        let elementos = document.querySelectorAll("input");
        elementos.forEach(input => {
            input.addEventListener("change", listener, false); 
        });
    }

    function listener(event) {
        let objeto = event.currentTarget;
        verifica(objeto);
    }

    function verifica(objeto){
        console.log(objeto);
        let valorObjeto = objeto.value;
        let idObjeto = objeto.id;
  
        if(idObjeto == "nombre"){
            if(valorObjeto == false || isValidNombre(valorObjeto) == false){
                alert("Nombre incorrecto")
                objeto.value = "";
            }
        }else if(idObjeto == "DNI"){
            if(valorObjeto == false || isValidDNI(valorObjeto) == false){
                alert("DNI incorrecto")
                objeto.value = "";
            }
        }else if(idObjeto == "nacimiento"){
            if(valorObjeto == false || isValidNacimiento(valorObjeto) == false){
                alert("Fecha de nacimiento incorrecta")
                objeto.value = "";
            }
        }else if(idObjeto == "web"){
            if(valorObjeto == false || isValidWeb(valorObjeto) == false){
                alert("Web incorrecta")
                objeto.value = "";
            }
        }else if(idObjeto == "mail"){
            if(valorObjeto == false || isValidMail(valorObjeto) == false){
                alert("Email incorrecto")
                objeto.value = "";
            }
        }else if(idObjeto == "contrasena"){
            if(valorObjeto == false || isValidContrasena(valorObjeto) == false){   
                alert("Contrasena incorrecta")
                objeto.value = "";
            }
        }
    }  

    function isValidDNI(dni){
        const validacion = /^\d{8}[A-Z]$/igm;
        return validacion.test(dni);
    }

    function isValidNombre(nombre){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/igm;
        return validacion.test(nombre);
    }

    function isValidApellidos(apellidos){
        const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/igm;
        return validacion.test(apellidos);
    }
    
    function isValidWeb(web){
        const validacion = /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/igm;
        return validacion.test(web);
    }

    function isValidMail(mail){
        const validacion = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;
        return validacion.test(mail);
    }

    