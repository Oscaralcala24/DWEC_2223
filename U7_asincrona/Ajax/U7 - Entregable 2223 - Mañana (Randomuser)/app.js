window.addEventListener("load",iniciar);
const arrayUsuarios = new Array();
const tabla = document.getElementById("tabla");
function iniciar(){
    document.getElementById("generaUsuario").addEventListener("click",generarUsuario);
    document.getElementById("guardarBBDDXML").addEventListener("click",guardarBBDDXML);
    document.getElementById("guardarBBDDFetch").addEventListener("click",guardarBBDDFetch);
}

function guardarBBDDFetch(){
    fetch("save_users.php",{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(arrayUsuarios)
    })
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}


function guardarBBDDXML(){
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        console.log("No soporta XMLHttpRequest")
    }
    if(xhr){
        xhr.onreadystatechange = verificarEstado
        xhr.open("POST","save_users.php")
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.send(JSON.stringify(arrayUsuarios));
    }
}
function verificarEstado(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText)
    }
}


function generarUsuario(){
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        console.log("No soporta XMLHttpRequest")
    }
    if(xhr){
        xhr.onreadystatechange = comprobar
        xhr.open("GET","https://randomuser.me/api/?nat=es")
        xhr.send();
    }
}

function comprobar(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText).results;
        console.log(resultado[0])
        dibujarUsuario(resultado[0])
    }
}

function dibujarUsuario(resultado){
    usuario = {
        name : resultado.name.first + " " + resultado.name.last,
        phone : resultado.phone,
        street : resultado.location.street.name + " " + resultado.location.street.number,
        email : resultado.email,
        image : resultado.picture.thumbnail
    }
    let card = document.getElementById("card")
    card.innerHTML = ""
    let img = document.createElement("img");
    let nombre = document.createElement("p");
    let telefono = document.createElement("p");
    let calle = document.createElement("p");
    let email = document.createElement("p");
    console.log(usuario.image)
    img.src = usuario.image
    img.alt = "foto usuario"
    nombre.textContent = usuario.nombre
    telefono.textContent = usuario.phone
    calle.textContent = usuario.street
    email.textContent = usuario.email
    let boton = document.createElement("button")
    boton.textContent = "Añadir usuario";
    boton.id = "introducirTabla"
    card.appendChild(img)
    card.appendChild(nombre)
    card.appendChild(telefono)
    card.appendChild(calle)
    card.appendChild(email)
    card.appendChild(boton)
    document.getElementById("introducirTabla").addEventListener("click", anadirTabla)
}

function anadirTabla() {
    
    if(arrayUsuarios.indexOf(usuario) == -1){
        tabla.innerHTML = ""
        arrayUsuarios.push(usuario)
        generarEncabezado(usuario)
        for (let index = 0; index < arrayUsuarios.length; index++) {
            let usuarioAux = arrayUsuarios[index]
            let tr = document.createElement("tr")
            for (const key in usuarioAux) {
                let td = document.createElement("td")
                if(key == "image"){
                    let img = document.createElement("img");
                    img.src = usuarioAux[key];
                    td.appendChild(img);
                }else{
                    td.textContent = usuarioAux[key];
                }
                tr.appendChild(td);
                tabla.appendChild(tr)
            }
        }
    }
}

function generarEncabezado(usuarioAux){
    console.log(usuarioAux)
    let tr = document.createElement("tr")
    for (const key in usuarioAux) {
        let th = document.createElement("th")
        th.textContent = key
        tr.appendChild(th);
        tabla.appendChild(tr);
    }
}



