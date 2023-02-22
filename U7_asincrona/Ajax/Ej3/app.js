window.addEventListener("load", iniciar,false);


function iniciar(){
    
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
      } else {
        alert("No tienes soporte para AJAX");
        return;  // Salimos y no hacemos la petición
      }
    if (xhr){
        xhr.onreadystatechange = comprobar;
        xhr.open("GET", "http://localhost:8090/U7_asincrona/Ajax/Ej3/series.xml")
        xhr.send();
    }
}

function comprobar(){
    if (xhr.readyState == 4 && xhr.status == 200){
        resultados = xhr.responseXML;
        serie = resultados.getElementsByTagName("serie");
        console.log(serie)
        tabla = document.getElementById("tabla");
        crearEncabezado();
        for (let index = 0; index < serie.length; index++) {
            let hijos = serie[index].childNodes;
            let tr = document.createElement("tr");            
            for (let index = 0; index < hijos.length; index++) {
                if(hijos[index].nodeName != "#text"){
                    let td = document.createElement("td");
                    td.textContent = hijos[index].textContent;
                    if(hijos[index].nodeName == "anho"){
                        if(td.textContent < 2001){
                            td.className = "rojo"
                        }else if(td.textContent > 2000 && td.textContent < 2011){
                            td.className = "amarillo"
                        }else{
                            td.className = "verde"
                        }
                    }else if(hijos[index].nodeName == "terminada"){
                        let img = document.createElement("img");
                        if(td.textContent == "si"){
                            img.src = "img/cheque.png";
                        }else{
                            img.src = "img/cancelar.png";
                        }
                        td.textContent = "";
                        td.appendChild(img);
                    }
                    tr.appendChild(td);
                }
            }
            tabla.appendChild(tr);
        }   
    }
}

function crearEncabezado(){
    let tr = document.createElement("tr");
    let hijos = serie[0].childNodes;
    for (let index = 0; index < hijos.length; index++) {
        if(hijos[index].nodeName != "#text"){
            let th = document.createElement("th");
            console.log(hijos[index].value)
            th.textContent = hijos[index].nodeName;
            tr.appendChild(th);
            
        } 
    }
    tabla.appendChild(tr)
}