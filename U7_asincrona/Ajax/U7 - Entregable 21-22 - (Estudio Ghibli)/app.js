window.addEventListener('load', iniciar);
estado = document.getElementById("estado");
function iniciar() {
    document.getElementById('cargaVehiculo').addEventListener('click', cargarTabla)
}

function cargarTabla(){
    document.getElementById('cargaVehiculo').addEventListener('click', registrarEnvio)
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{
        console.log("Navegador no soporta AJAX")
    }
    if(xhr){
        xhr.onreadystatechange = comprobar;
        xhr.open('GET','http://localhost:8090/U7_asincrona/Ajax/U7%20-%20Entregable%2021-22%20-%20(Estudio%20Ghibli)/vehiculos.json')
        xhr.send();
    }
}

function comprobar(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText);
        console.log(resultado)
        subirBBDD(resultado);
    }
}

function crearTabla(resultado){
    let contenedorTabla = document.getElementById('contenido');
    contenedorTabla.innerHTML ="";
    let tabla = document.createElement('table');
    //Encabezado tabla
    let tr = document.createElement('tr');
    for (const key in resultado[0]) {
        if(key == "id" || key == "name" || key == "description" || key == "vehicle_class"){
            let th = document.createElement('th');
            th.textContent = key;
            tr.appendChild(th);
        }
    }
    let thEnvio = document.createElement('th');
    thEnvio.textContent = "envio"
    tr.appendChild(thEnvio);
    tabla.appendChild(tr);

    //Contenido de la tabla
    for (let index = 0; index < resultado.length; index++) {
        let vehiculo = resultado[index];
        let tr = document.createElement("tr")
        let contador = 0;
        for (const key in vehiculo) {
            if(key == "id" || key == "name" || key == "description" || key == "vehicle_class"){
                let th = document.createElement("th");
                th.textContent = vehiculo[key]
                tr.appendChild(th);
                contador++;
                if (contador== 4){
                    let thInput = document.createElement("th");
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    thInput.appendChild(input);
                    tr.appendChild(thInput);
                    tabla.appendChild(tr)
                    contenedorTabla.appendChild(tabla)
                    break;
                }
            } 
        } 
    }
}


function subirBBDD(resultado) {
    fetch('insertar_vehiculos.php',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(resultado)
    })
    .then((response)=>{
        if (response.ok){
            return response.json();
        }
    })
    .then((data) => {
        console.log(JSON.stringify(data));
        
        estado.textContent = JSON.stringify(data)
        
        crearTabla(resultado);
        document.getElementById('registrarEnvio').addEventListener('click', registrarEnvio)
    })
}


function registrarEnvio(){
    let inputCheckbox = document.querySelectorAll("input[type=checkbox]")
    console.log(inputCheckbox)


    
    for (let index = 0; index < inputCheckbox.length; index++) {
        if (inputCheckbox[index].checked == true) {
            let filas = document.querySelectorAll("tr");
            let id = filas[index+1].firstChild.textContent;
            console.log(id)
            let objeto = {
                "nombre" : document.getElementById("nombre").value,
                "direccion" : document.getElementById("direccion").value,
                "telefono" : document.getElementById("telefono").value,
                "correo" : document.getElementById("email").value,
                "vehiculos" : [id]
            };
            fetch('registrar_envio.php',{
                
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(objeto)
            })
            .then((response)=>{
                if (response.ok){
                    console.log(filas[index+1].firstChild.textContent)
                    return response.json();
                }
            })
            .then((data) => {
                console.log(JSON.stringify(data));          
                console.log(JSON.stringify(objeto));          
                estado.textContent = JSON.stringify(data)
            })
        }
    }        

}

