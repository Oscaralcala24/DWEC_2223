window.addEventListener("load",iniciar, false);

function iniciar(){
    let botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("click",introducir, false);
    });
}

function introducir(e){
    let boton = e.currentTarget;
    if (boton.id == "text"){
        let input = document.createElement("input");
        let respuesta = prompt("Introduce nombre del input tipo texto")
        input.name = respuesta;
        input.type = "text";
        insertar(input); 
    }else if (boton.id == "password"){
        let input = document.createElement("input");
        let respuesta = prompt("Introduce nombre del input tipo password")
        input.name = respuesta;
        input.type = "password";
        insertar(input); 
    }else if (boton.id == "textarea"){
        let textarea = document.createElement("textarea");
        let respuesta = prompt("Introduce nombre del input tipo textarea");
        textarea.name = respuesta;
        textarea.rows = "5";
        textarea.cols = "40";
        insertar(textarea); 
    }else if (boton.id == "label"){
        let label = document.createElement("label");
        let respuesta = prompt("Introduce nombre `for` del label");
        label.htmlFor = respuesta;
        label.textContent = `Introduce ${respuesta} :` 
        insertarLabel(label);
    }else if (boton.id == "imagen"){
        let img = document.createElement("img");
        img.src = prompt("Introduce ruta de la imagen");
        insertar(img);
    }else if (boton.id == "checkbox"){
        let input = document.createElement("input");
        let label = document.createElement("label");
        input.type = "checkbox";
        input.name = prompt("Introduce nombre del checkbox");
        input.value = prompt("Introduce valor del checkbox");
        label.textContent = prompt("Introduce texto del checkbox");
        insertarLabel(label);
        insertar(input);
    }else if (boton.id == "radiobutton"){
        let input = document.createElement("input");
        let label = document.createElement("label");

        input.type = "radio";
        input.name = prompt("Introduce nombre del radio");
        input.value = prompt("Introduce valor del radio");
        label.textContent = prompt("Introduce texto del radio");
        insertarLabel(label);
        insertar(input);
    }else if (boton.id == "button"){
        let input = document.createElement("input");
        input.type = "submit";
        input.name = prompt("Introduce nombre del submit");
        input.value = prompt("Introduce valor del submit");
        insertar(input);
    }
}

function insertar(elemento){
    let br = document.createElement("br");
    document.body.appendChild(elemento);
    document.body.appendChild(br);

}

function insertarLabel(label){
    let br = document.createElement("br");
    document.body.appendChild(label);
    document.body.appendChild(br);
    
}