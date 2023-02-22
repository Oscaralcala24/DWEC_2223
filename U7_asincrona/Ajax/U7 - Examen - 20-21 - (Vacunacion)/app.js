window.addEventListener('load', iniciar);

function iniciar(){
    let botonxhr = document.getElementById("xhr");
    let botonfetch = document.getElementById("fetch");
    botonxhr.addEventListener("click", cargarXhr);
    botonfetch.addEventListener("click", cargarFetch);
    tabla = document.getElementById("tabla");
}

function cargarXhr(){

    let select = document.getElementById("ccaa");
    select.innerHTML = ""
    tabla.innerHTML = "";
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{
        alert("No tienes soporte para AJAX");
        return;
    }
    if(xhr){
        xhr.onreadystatechange = comprobar;
        xhr.open("GET", "http://localhost:8090/U7_asincrona/Ajax/U7 - Examen - 20-21 - (Vacunacion)/latest.json");
        xhr.send();
    }
}

function comprobar(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText);
        console.log(resultado)
        cargarSelectXHR(resultado);
        cargarTablaXHR(resultado);
    }
}
function cargarSelectXHR(resultado){
    let select = document.getElementById("ccaa");
    for (let index = 0; index < resultado.length; index++) {
        let valores = resultado[index];
        if (valores["ccaa"] != "Totales"){
            let option = document.createElement("option");
            option.value = valores["ccaa"]
            option.textContent = valores["ccaa"]
            select.appendChild(option)
        }
    }
}

function cargarTablaXHR(resultado){
    crearEncabezado();
    let arrayRegistros = ["ccaa","dosisEntregadas","dosisAdministradas","dosisPautaCompletada","porcentajeEntregadas","porcentajePoblacionAdministradas","porcentajePoblacionCompletas"];
    for (let index = 0; index < resultado.length; index++) {
        let valores = resultado[index];   
        let tr = document.createElement("tr");
        if (valores["ccaa"] != "Totales"){
            console.log(valores)
            for (const registro in valores){
                console.log(registro)
                if(arrayRegistros.indexOf(registro) != -1){
                    let td = document.createElement("td");
                    td.textContent = valores[registro];
                    tr.appendChild(td)
                }
            }
        }
        tabla.appendChild(tr);
    }
}

function crearEncabezado(resultado){
    let registros = ["Comunidad", "D. Entregadas","D. Admin","D. Completa","% Entregadas","% Pobl. Admin","% Pobl. Completa"];
    let tr = document.createElement("tr");
    for (let index = 0; index < registros.length; index++){
        let th = document.createElement("th");
        th.textContent = registros[index];
        tr.appendChild(th)
    }
    tabla.appendChild(tr)
}




function cargarSelectFetch(){
    fetch("latest.json",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) =>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data) =>{
        let select = document.getElementById("ccaa");
        let resultado = data;
        for (let index = 0; index < resultado.length; index++) {
            let values = resultado[index]
            let tr = document.createElement("tr");
            for (const value in values) {  
                let td = document.createElement("td");
                console.log(value)
                console.log(values[value])
                td.textContent = values[value]
                
            }            
        }
    })
    
}






function cargarFetch(){
    let select = document.getElementById("ccaa");
    select.innerHTML = "";
    tabla.innerHTML = "";
}