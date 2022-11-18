var arrayDiscos = [];
class Disco{
    constructor(){
        this.nombre = "";
        this.grupo = "";
        this.anoPublicacion = "";
        this.tipo = "";
        this.localizacion = 0;
        this.prestado = false;
    }
    valoresDisco(nombre,grupo,anoPublicacion,tipo,localizacion){
        this.nombre = nombre;
        this.grupo = grupo;
        this.anoPublicacion = anoPublicacion;
        this.tipo = tipo;
        this.localizacion = localizacion;
    }
    cambiarLocalizacion(disco,localizacion){
        this.localizacion = localizacion;   
    }

    esPrestado(){
        if(this.prestado){
            this.prestado = false;
        }else{
            this.prestado = true;
        }
    }
    mostrarInformacion(){
        console.log(this.nombre);
        console.log(this.grupo);
        console.log(this.anoPublicacion);
        console.log(this.tipo);
        console.log(this.localizacion);
        console.log(this.prestado);
    }
    anadirDisco(){
        arrayDiscos.push(this);
    }

}
let disco1 = new Disco();1
disco1.valoresDisco("disco1","","","",0);
disco1.anadirDisco();
let disco2 = new Disco();
disco2.valoresDisco("disco2","","","",0);
disco2.anadirDisco();
let disco3 = new Disco();
disco3.valoresDisco("disco3","","","",0);
disco3.anadirDisco();
let disco4 = new Disco();
disco4.valoresDisco("disco4","","","",0);
disco4.anadirDisco();
let disco5 = new Disco();
disco5.valoresDisco("disco5","","","",0);
disco5.anadirDisco();
let disco6 = new Disco();
disco6.valoresDisco("disco6","","","",0);
disco6.anadirDisco();
let disco7 = new Disco();
disco7.valoresDisco("disco7","","","",0);
disco7.anadirDisco();
let disco8 = new Disco();
disco8.valoresDisco("disco8","","","",0);
disco8.anadirDisco();


switch(parseInt(prompt("Que quieres hacer \n"+
"1: Mostrar numero discos\n"+ 
"2: Mostrar listado discos\n"+
"3: Mostrar un intervalo de discos\n"+
"4: Añadir un disco\n"+
"5: Borrar un disco\n"+
"6: Consultar un disco \n"))){

case 1: 
    numeroDiscos();
    break;

case 2:
    let opcion = parseInt(prompt("Como quieres visualizar los discos \n1.Normal\n2.Del revés \n3.Ordenado alfabéticamente"))
    switch(opcion){
        case 1: mostrarDiscos();
        break;
        case 2 : mostrarDiscosInverso();
        break;
        case 3: discosOrdenados();
    }
    break;

case 3: 
    let inicioFin = prompt("Introduce Inicio-fin con guión en medio");
    let arrayAux = inicioFin.split("-");
    let inicio = arrayAux[0];
    let fin = arrayAux[1];
    mostrarDiscosIntervalo(inicio,fin);
    break;

case 4:
    let discoIntroducido = prompt("Que disco quieres introducir:")
    let opcion1 = parseInt(prompt("Donde quieres añadir el disco \n1.Principio\n2.Final"));
    switch (opcion1) {
        case 1:
            anadirDiscoInicio(discoIntroducido);
            break;
        case 2:
            anadirDiscoFinal(discoIntroducido);
            break;
    }
    break;

case 5: 
    let opcion2 = parseInt(prompt("Donde quieres borrar el disco \n1.Principio\n2.Final"));
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
    let opcion3 = parseInt(prompt("Como quieres consultar \n1.Posición\n2.Nombre"));
    switch (opcion3) {
        case 1:
            let posicion = parseInt(prompt("Inserte posicion"));
            mostrarDiscoPosicion(posicion);
            break;
        case 2:
            let discoConsultar = prompt("Inserte nombre del disco");
            mostrarPosicionDisco(discoConsultar);
            break;
    }
    break;
}
//Mostrar el número de elementos del array.
function numeroDiscos(){
    document.getElementById("resultado").innerHTML = "<p>" + arrayDiscos.length + "</p>" ;
}


//Mostrar todos los elementos del array.
function mostrarDiscos(){
    var elemento = document.createElement("ul");
    elemento.id = "lista";
    document.getElementById("resultado").appendChild(elemento);

    for (let index = 0; index < arrayDiscos.length; index++) {
        let disco = arrayDiscos[index];
        var elementoli = document.createElement("li");
        document.getElementById("lista").appendChild(elementoli).innerHTML = disco.nombre;
    }
}

//Muestra los elementos del array en sentido inverso.
function mostrarDiscosInverso(){
    let arrayAux = Array.from(arrayDiscos);
    arrayAux.reverse();
    var elemento = document.createElement("ul");
    elemento.id = "lista";
    document.getElementById("resultado").appendChild(elemento);

    for (let index = 0; index < arrayAux.length; index++) {
        let disco = arrayAux[index];
        var elementoli = document.createElement("li");
        document.getElementById("lista").appendChild(elementoli).innerHTML = disco.nombre;
    }
}

// Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
function discosOrdenados(){
    let arrayAux = Array.from(arrayDiscos);
    arrayAux.sort();
    let elemento = document.createElement("ul");
    elemento.id = "lista";
    document.getElementById("resultado").appendChild(elemento);

    for (let index = 0; index < arrayAux.length; index++) {
        let disco = arrayAux[index];
        let elementoli = document.createElement("li");
        document.getElementById("lista").appendChild(elementoli).innerHTML = disco.nombre;
    }
}

//Añadir un elemento al principio del array.
function anadirDiscoInicio(discoIntroducido){
    let nuevoDisco = new Disco ();
    nuevoDisco.valoresDisco(discoIntroducido, "","","",0);
    arrayDiscos.unshift(nuevoDisco);
    mostrarDiscos();
}

//Añadir un elemento al final del array.
function anadirDiscoFinal(discoIntroducido){
    let nuevoDisco = new Disco ();
    nuevoDisco.valoresDisco(discoIntroducido, "","","",0);
    arrayDiscos.push(nuevoDisco);
    mostrarDiscos();
}

//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function borrarInicio(){
    let elemento = document.createElement("p");
    elemento.id = "borrado";
    document.getElementById("resultado").appendChild(elemento).innerHTML = arrayDiscos.shift().nombre;
    mostrarDiscos()
}

//Borrar un elemento al final del array (y decir cuál se ha borrado).
function borrarFinal(){
    let elemento = document.createElement("p");
    elemento.id = "borrado";
    document.getElementById("resultado").appendChild(elemento).innerHTML = arrayDiscos.pop().nombre;
    mostrarDiscos()
}

//Muestra el elemento que se encuentra en una posición que el usuario indica.
function mostrarDiscoPosicion(posicion){
    let elemento = document.createElement("p");
    elemento.id = "paisReturn";
    document.getElementById("resultado").appendChild(elemento).innerHTML = "En la posición " +posicion+ " se encuentra: " + arrayDiscos[posicion].nombre;
}

//Muestra la posición en la que se encuentra un elemento que le indica el usuario.
function mostrarPosicionDisco(discoIntroducido){
    let elemento = document.createElement("p");
        elemento.id = "posicion";
    if(arrayDiscos.includes(arrayDiscos.nombre == discoIntroducido)){
        document.getElementById("resultado").appendChild(elemento).innerHTML = "El disco " +discoIntroducido+ "  se encuentra en la posición: " + arrayDiscos.indexOf(discoIntroducido.nombre);
    }else{
        
    document.getElementById("resultado").appendChild(elemento).innerHTML = "El país " +discoIntroducido+ "  no se encuentra en ninguna posición";
    }
}

//Muestra los elementos que se encuentran en un intervalo que el usuario indica.
function mostrarDiscosIntervalo(posicionInicio, posicionFinal){
    arraySlice = arrayDiscos.slice(posicionInicio, posicionFinal);
    let elemento = document.createElement("p");
    elemento.id = "paisReturn";
    document.getElementById("resultado").appendChild(elemento).innerHTML = "Entre la posición " +posicionInicio + " y la posición " + posicionFinal + " se encuentra: " + mostrarDiscoNombre(arraySlice);
}

function mostrarDiscoNombre(array){
    var devolver = "";
    for (let index = 0; index < array.length; index++) {
        devolver += array[index].nombre + ", ";
    }    
    return devolver
}



