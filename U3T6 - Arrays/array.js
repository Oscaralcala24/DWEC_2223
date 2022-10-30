var paises = new Array("Tonga","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","Trinidad y Tobago","Senegal","Serbia","Seychelles","Sierra Leona","Afganistán","Baréin","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica",
"Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso",
"Burundi","Bután","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés",
"Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania",
"Luxemburgo","Madagascar","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Albania","Barbados","Micronesia","Moldavia",
"Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay",
"Perú","Polonia","Portugal","Cabo Verde","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi",
"Francia","Gabón","Gambia","Irán","Irlanda","Islandia","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda",
"Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","Singapur","Siria","Somalia","Sri Lanka",
"Suazilandia","Túnez","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Guinea","India","Indonesia","Irak","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay",
"Uzbekistán","Zimbabue");



switch(parseInt(prompt("Que quieres hacer \n"+
"1: Mostrar numero paises\n"+ 
"2: Mostrar listado paises\n"+
"3: Mostrar un intervalo de paises\n"+
"4: Añadir un país\n"+
"5: Borrar un pais\n"+
"6: Consultar un pais \n"))){

case 1: 
    numeroPaises();
    break;

case 2:
    let opcion = parseInt(prompt("Como quieres visualizar los paises \n1.Normal\n2.Del revés \n3.Ordenado alfabéticamente"))
    switch(opcion){
        case 1: mostrarPaises();
        break;
        case 2 : mostrarPaisesInverso();
        break;
        case 3: paisesOrdenados();
    }
    break;

case 3: 
    let inicioFin = prompt("Introduce Inicio-fin con guión en medio");
    let arrayAux = inicioFin.split("-");
    let inicio = arrayAux[0];
    let fin = arrayAux[1];
    mostrarPaisesIntervalo(inicio,fin);
    break;

case 4:
    let paisIntroducido = prompt("Que pais quieres introducir:")
    let opcion1 = parseInt(prompt("Donde quieres añadir el pais \n1.Principio\n2.Final"));
    switch (opcion1) {
        case 1:
            anadirPaisInicio(paisIntroducido);
            break;
        case 2:
            anadirPaisFinal(paisIntroducido);
            break;
    }
    break;

case 5: 
    let opcion2 = parseInt(prompt("Donde quieres borrar el pais \n1.Principio\n2.Final"));
    switch (opcion2) {
        case 1:
            borrarInicio();
            break;
        case 2:
            borrarFinal();
            break;
    }
    break;

case 6:
    let opcion3 = parseInt(prompt("Como quieres consultar \n1.Posución\n2.Nombre"));
    switch (opcion3) {
        case 1:
            let posicion = parseInt(prompt("Inserte posicion"));
            mostrarPaisPosicion(posicion);
            break;
        case 2:
            let paisConsultar = prompt("Inserte pais");
            mostraraPosicionPais(paisConsultar);
            break;
    }
    break;
}
//Mostrar el número de elementos del array.
function numeroPaises(){
    document.getElementById("resultado").innerHTML = "<p>" + paises.length + "</p>" ;
}


//Mostrar todos los elementos del array.
function mostrarPaises(){
    var elemento = document.createElement("ul");
    elemento.id = "lista";
    document.getElementById("resultado").appendChild(elemento);

    for (let index = 0; index < paises.length; index++) {
        let pais = paises[index];
        var elementoli = document.createElement("li");
        document.getElementById("lista").appendChild(elementoli).innerHTML = pais;
    }
}

//Muestra los elementos del array en sentido inverso.
function mostrarPaisesInverso(){
    let arrayAux = Array.from(paises);
    arrayAux.reverse();
    var elemento = document.createElement("ul");
    elemento.id = "lista";
    document.getElementById("resultado").appendChild(elemento);

    for (let index = 0; index < arrayAux.length; index++) {
        let pais = arrayAux[index];
        var elementoli = document.createElement("li");
        document.getElementById("lista").appendChild(elementoli).innerHTML = pais;
    }
}

// Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
function paisesOrdenados(){
    let arrayAux = Array.from(paises);
    arrayAux.sort();
    let elemento = document.createElement("ul");
    elemento.id = "lista";
    document.getElementById("resultado").appendChild(elemento);

    for (let index = 0; index < arrayAux.length; index++) {
        let pais = arrayAux[index];
        let elementoli = document.createElement("li");
        document.getElementById("lista").appendChild(elementoli).innerHTML = pais;
    }
}

//Añadir un elemento al principio del array.
function anadirPaisInicio(paisIntroducido){
    paises.unshift(paisIntroducido);
    mostrarPaises()
}

//Añadir un elemento al final del array.
function anadirPaisFinal(paisIntroducido){
    paises.push(paisIntroducido);
    mostrarPaises()
}

//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function borrarInicio(){
    let elemento = document.createElement("p");
    elemento.id = "borrado";
    document.getElementById("resultado").appendChild(elemento).innerHTML = paises.shift();
    mostrarPaises()
}

//Borrar un elemento al final del array (y decir cuál se ha borrado).
function borrarFinal(){
    let elemento = document.createElement("p");
    elemento.id = "borrado";
    document.getElementById("resultado").appendChild(elemento).innerHTML = paises.pop();
    mostrarPaises()
}

//Muestra el elemento que se encuentra en una posición que el usuario indica.
function mostrarPaisPosicion(posicion){
    let elemento = document.createElement("p");
    elemento.id = "paisReturn";
    document.getElementById("resultado").appendChild(elemento).innerHTML = "En la posición " +posicion+ " se encuentra: " + paises[posicion];
}

//Muestra la posición en la que se encuentra un elemento que le indica el usuario.
function mostraraPosicionPais(paisIntroducido){
    let elemento = document.createElement("p");
        elemento.id = "posicion";
    if(paises.includes(paisIntroducido)){
        document.getElementById("resultado").appendChild(elemento).innerHTML = "El país " +paisIntroducido+ "  se encuentra en la posición: " + paises.indexOf(paisIntroducido);
    }else{
        
    document.getElementById("resultado").appendChild(elemento).innerHTML = "El país " +paisIntroducido+ "  no se encuentra en ninguna posición";
    }
}

//Muestra los elementos que se encuentran en un intervalo que el usuario indica.
function mostrarPaisesIntervalo(posicionInicio, posicionFinal){
    let elemento = document.createElement("p");
    elemento.id = "paisReturn";
    document.getElementById("resultado").appendChild(elemento).innerHTML = "Entre la posición " +posicionInicio + " y la posición " + posicionFinal + " se encuentra: " + paises.slice(posicionInicio, posicionFinal);
}