window.addEventListener('load',iniciar);
const API_BASE_URL = "https://gateway.marvel.com/";
const PRIVATE_API_KEY = "81abb1cf999f006c4003c4955a485509c766cc6e";
const PUBLIC_API_KEY = "5ad6815041ee5a46be1cb9edcc0e33f3";
const TS = "1000";
const HASH = md5(TS + "81abb1cf999f006c4003c4955a485509c766cc6e" + "5ad6815041ee5a46be1cb9edcc0e33f3");
const url = API_BASE_URL+"/v1/public/characters?apikey="+PUBLIC_API_KEY+"&hash="+HASH+"&ts="+TS+"&limit=10&offset=0"
const breadcrumb = document.getElementById("breadcrumb");
const tabla = document.getElementById("tabla");
arrayPersonajes = new Array();
arrayPersonajesAux = new Array();
function iniciar() {
    document.getElementById("cargarPersonajes").addEventListener("click", cargarPersonajes);
    document.getElementById("guardarXML").addEventListener("click", guardarXML);
    document.getElementById("recuperarFetch").addEventListener("click", recuperarFetch);
    document.getElementById("limpiarTabla").addEventListener("click", limpiarTabla);
}
function limpiarTabla(){
    tabla.innerHTML = ""
    breadcrumb.textContent = "Tabla de personajes limpia"
}
function personajesSeleccionados(){
    arrayPersonajesAux = [];
    inputsCheck = document.getElementsByClassName("true");
    if (inputsCheck.length == 0){
        breadcrumb.textContent = "No hay personajes seleccionados"
    }
    for (let i = 0; i < inputsCheck.length; i++) { 
        for (let j = 0; j < arrayPersonajes.length; j++) {
            if(arrayPersonajes[j].name == inputsCheck[i].id){
                let personajeAUX = {
                    id: arrayPersonajes[j].id,
                    name: arrayPersonajes[j].name,
                    modified: arrayPersonajes[j].modified,
                    path: arrayPersonajes[j].thumbnail
                }
                arrayPersonajesAux.push(personajeAUX);
            }
        }
    }
}

function guardarXML(){
    
    personajesSeleccionados();
    
    console.log(arrayPersonajesAux)
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        console.log("Navegador no compatible");
    }
    if(xhr){
        xhr.onreadystatechange = comprobar;
        xhr.open("POST","save_marvel_characters.php")
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.send(JSON.stringify(arrayPersonajesAux));
    }
}

function recuperarFetch(){
    limpiarTabla()
    fetch("get_marvel_characters.php",{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    })
    .then((resultado) => {
        if(resultado.ok){
            return resultado.json();
        }
    })
    .then((data)=>{
        breadcrumb.textContent = "Personajes mostrados con éxito mediante Fetch de la BBDD";
        crearCardPersonajes2(data)
    })
    .catch((err) => {
        console.log(err)
    });
}

function comprobar(){
    if(xhr.status == 200 & xhr.readyState == 4){
        console.log(xhr.responseText);
        if (inputsCheck.length == 0){
            breadcrumb.textContent = "No hay personajes seleccionados"
        }else{
            breadcrumb.textContent = "Personajes subidos con éxito mediante XML";

        }
    }else if(xhr.status != 200){
        breadcrumb.textContent = "Error en la conexión"
    }
}

function cargarPersonajes(){
    limpiarTabla()
    
    fetch(url,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((resultado) => {
        if(resultado.ok){
            return resultado.json();
        }
    })
    .then((data)=>{
        breadcrumb.textContent = "Personajes mostrados con éxito";
        arrayPersonajes = [];
        crearCardPersonajes(data.data.results);
    })
    .catch((err) => {
        console.log(err)
    });
}

function crearCardPersonajes(personajes){
    for (let index = 0; index < personajes.length; index++) {

        let personaje = {
            name : personajes[index].name,
            thumbnail : personajes[index].thumbnail.path +"/portrait_uncanny."+ personajes[index].thumbnail.extension,
            modified : personajes[index].modified,
            comics : personajes[index].comics,
            id : personajes[index].id,
        }
        
        arrayPersonajes.push(personaje)
        generarCard(personaje)
    }
}
function crearCardPersonajes2(personajes){
    for (let index = 0; index < personajes.length; index++) {

        let personaje = {
            id : personajes[index].id,
            name : personajes[index].name,
            modified : personajes[index].modified,
            path : personajes[index].path
        }

        console.log(personajes)

        generarCard2(personaje)
    }
}

function generarCard(personaje){
    let div1 = document.createElement('div');
    div1.className = "card"
    div1.style = "width: 18rem;"
    let img = document.createElement('img');
    img.className = "card-img-top";
    img.src = personaje.thumbnail;
    let div2 = document.createElement('div');
    div2.className = "card-body";
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = personaje.name
    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = personaje.modified;
    let ul = document.createElement("ul");
    for (let index = 0; index < personaje.comics.items.length; index++) {
        let li = document.createElement("li");
        li.textContent = personaje.comics.items[index].name;
        ul.appendChild(li)
    }
    div1.appendChild(img);
    div2.appendChild(h5)
    div2.appendChild(p)
    div2.appendChild(ul)
    div1.appendChild(div2)
    let divswitch = document.createElement("div");
    divswitch.className = "form-check form-switch";
    let input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input";
    input.role ="switch";
    input.id = personaje.name
    input.addEventListener("click", cambiar_estado)
    divswitch.appendChild(input);
    div1.appendChild(divswitch)
    tabla.appendChild(div1)
}
function generarCard2(personaje){
    let div1 = document.createElement('div');
    div1.className = "card"
    div1.style = "width: 18rem;"
    let img = document.createElement('img');
    img.className = "card-img-top";
    img.src = personaje.path;
    let div2 = document.createElement('div');
    div2.className = "card-body";
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = personaje.name
    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = personaje.modified;  
    div1.appendChild(img);
    div2.appendChild(h5)
    div2.appendChild(p)
    div1.appendChild(div2)
    tabla.appendChild(div1)
}


function cambiar_estado(){
    const list = this.classList;
    if(list.contains("true") == false){
        list.add("true");
    }else{
        list.remove == "true"
    }
}