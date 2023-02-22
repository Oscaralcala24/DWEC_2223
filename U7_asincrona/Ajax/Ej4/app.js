window.addEventListener("load",iniciar);

function iniciar(){
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{
        alert("No tienes soporte para AJAX");
        return;
    }
    if(xhr){
        xhr.onreadystatechange = comprobar;
        xhr.open("GET", "http://localhost:8090/U7_asincrona/Ajax/Ej4/series.json");
        xhr.send()
    }
}

function comprobar(){
    if(xhr.readyState == 4 && xhr.status == 200){
        resultados = JSON.parse(xhr.responseText);
        tabla = document.getElementById("tabla");
        crearEncabezado();
        for (let index = 0; index < resultados.Series.length; index++) {
            let values = resultados.Series[index];
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
}

function crearEncabezado(){
    let tr = document.createElement("tr");
    let keys = resultados.Series[0];
    console.log(keys);
    for (const key in keys){        
        let th = document.createElement("th");
        th.textContent = key
        tr.appendChild(th);
    }
    tabla.appendChild(tr)
}