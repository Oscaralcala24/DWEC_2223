window.addEventListener('load', iniciar)

function iniciar() {
    document.getElementById('enviar').addEventListener('click', introducirDatos)
    document.getElementById('mostrar').addEventListener('click', mostrarDatos)
    console.log('iniciar')
}

function introducirDatos() {
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


    fetch("create_serie.php",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    }) 
}

function mostrarDatos() {
    document.getElementById("tabla").innerHTML = ""
    fetch("listar_series.php",{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) => {
        resultados = data
        tabla = document.getElementById("tabla");
        console.log(data)
        crearEncabezado();
        crearContenido();
    })
}

function crearEncabezado(){
    let tr = document.createElement("tr");
    let keys = resultados[0];
    for (const key in keys){        
        let th = document.createElement("th");
        th.textContent = key
        tr.appendChild(th);
    }
    tabla.appendChild(tr)
}

function crearContenido(){
    for (let index = 0; index < resultados.length; index++) {
        let values = resultados[index];
        let tr = document.createElement("tr");
        for (const value in values){    
            let td = document.createElement("td");                  
            td.textContent = values[value];
            tr.appendChild(td);
            if(value == "anho"){
                if(td.textContent < 2001){
                    td.className = "rojo"
                }else if(td.textContent > 2000 && td.textContent < 2011){
                    td.className = "amarillo"
                }else{
                    td.className = "verde"
                }
            }else if(value == "terminada"){
                let img = document.createElement("img");
                if(td.textContent == 1){
                    img.src = "img/cheque.png";
                }else{
                    img.src = "img/cancelar.png";
                }
                td.textContent = "";
                td.appendChild(img);
            }
            tr.appendChild(td);
        }           
        tabla.appendChild(tr);
    }
}