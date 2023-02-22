window.addEventListener('load',iniciar);

function iniciar(){
    document.getElementById("cargarCriminales").addEventListener('click', cargaCriminales)
    document.getElementById("limpiarTabla").addEventListener('click', limpiarTabla)
    document.getElementById("cargarFetch").addEventListener('click', crearFetch)
    document.getElementById("cargaXML").addEventListener('click',crearXML)
}

function crearXML(){
    limpiarTabla();
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        console.log("Navegador no soporta XMLHttpRequest");
    }
    if(xhr){
        xhr.onreadystatechange = comprobarBBDD;
        xhr.open('GET', 'get_criminals.php')
        xhr.send();
    }
}

function comprobarBBDD(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText);
        resultado = resultado
        crearTablaCriminales2(resultado);
    }
}

function crearFetch(){
    limpiarTabla();
    
    fetch('get_criminals.php')
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        crearTablaCriminales2(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function limpiarTabla(){
    let divTabla = document.getElementById("contenidoTabla")
    let estado = document.getElementById("resultado");
    divTabla.innerHTML = "";
    estado.textContent = "Tabla limpia";
}
function cargaCriminales(){
    limpiarTabla();
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        console.log("Navegador no soporta XMLHttpRequest");
    }
    if(xhr){
        xhr.onreadystatechange = comprobar;
        xhr.open('GET', 'https://api.fbi.gov/@wanted')
        xhr.send();
    }
}

function comprobar(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText);
        resultado = resultado.items
        console.log("resultado");
        crearTablaCriminales(resultado);
    }
}

function crearTablaCriminales(resultado){

    let divTabla = document.getElementById("contenidoTabla")
    
    let tabla = document.createElement('table')
    //Crea encabezado
    let trEncabezado = document.createElement('tr');
    let contadorAux = 0
    for (const key in resultado[0]) {
        if(key == "uid" || key == "title" || key == "description" || key == "aliases" || key == "images"){
            let th = document.createElement('th')
            th.textContent = key;
            trEncabezado.appendChild(th);
            contadorAux++;
            if(contadorAux==5){
                let th = document.createElement('th');
                th.textContent = "guardar";
                trEncabezado.appendChild(th);
            }   
            }
           
        }
    tabla.appendChild(trEncabezado);
    divTabla.appendChild(tabla);


    //Crea contenido

    
    for (let index = 0; index < resultado.length; index++) {
        let tr = document.createElement('tr');
        let criminal = resultado[index];
        contadorAux = 0
        for (const key in criminal) {
            if(key == "uid" || key == "title" || key == "description" || key == "aliases" || key == "images"){
                let td = document.createElement('td');               
                if(key == "images"){
                    let arrayImg = criminal[key];
                    
                    let img = document.createElement('img');
                    img.id = key
                    img.src = arrayImg[0].thumb;
                    td.appendChild(img);
                }else{
                    td.textContent = criminal[key]; 
                    td.id = key 
                }
                
                tr.appendChild(td);
                contadorAux++;
                if(contadorAux==5){
                    let td = document.createElement('td');
                    let boton = document.createElement('button');
                    boton.textContent = "guardar";

                    boton.addEventListener('click', guardarCriminal);
                    td.appendChild(boton)
                    tr.appendChild(td);
                }   
            }

        }
        tabla.appendChild(tr);
    }
    let arrayBotones = document.querySelectorAll("button");
    console.log(arrayBotones[1])
    let estado = document.getElementById("resultado");

    estado.textContent = "Criminales cargados del json";
}


function guardarCriminal(e){
    let objeto = e.currentTarget;
    
    let arrayBotones = document.querySelectorAll("button");
    let arrayTr = document.querySelectorAll("tr");

    for (let index = 0; index < arrayBotones.length; index++) {
        if(objeto == arrayBotones[index]){
            let trAux = arrayTr[index];
            hijos =  trAux.childNodes
            console.log(hijos[1].innerHTML)
            let objeto ={
                "uid": hijos[3].innerHTML,
                "title":hijos[0].innerHTML,
                "description": hijos[2].innerHTML,
                "aliases": [hijos[1].innerHTML],
                "images": hijos[4].firstChild.src
            }
            console.log(objeto)
            fetch('save_criminal.php',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(objeto)
            })
            .then((response)=>{
                if(response.ok){
                    let estado = document.getElementById("resultado");

                    estado.textContent = "Criminale incluido en la bbdd";
                    return response.json();
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }     
    }
}




function crearTablaCriminales2(resultado){

    let divTabla = document.getElementById("contenidoTabla")
    
    let tabla = document.createElement('table')
    //Crea encabezado
    let trEncabezado = document.createElement('tr');
    for (const key in resultado[0]) {
        if(key == "uid" || key == "title" || key == "description" || key == "aliases" || key == "images"){
            let th = document.createElement('th')
            th.textContent = key;
            trEncabezado.appendChild(th);

            }
           
        }
    tabla.appendChild(trEncabezado);
    divTabla.appendChild(tabla);


    //Crea contenido

    
    for (let index = 0; index < resultado.length; index++) {
        let tr = document.createElement('tr');
        let criminal = resultado[index];
        contadorAux = 0
        for (const key in criminal) {
            if(key == "uid" || key == "title" || key == "description" || key == "aliases" || key == "images"){
                let td = document.createElement('td');               
                if(key == "images"){
                    let arrayImg = criminal[key];
                    
                    let img = document.createElement('img');
                    img.id = key
                    img.src = criminal[key];
                    td.appendChild(img);
                }else{
                    td.textContent = criminal[key]; 
                    td.id = key 
                }
                
                tr.appendChild(td);
            }

        }
        tabla.appendChild(tr);
    }
    let arrayBotones = document.querySelectorAll("button");
    console.log(arrayBotones[1])
    let estado = document.getElementById("resultado");
    estado.textContent = "Criminales de la bbdd mostrados";
}