
var discazo = new Disco();

valoresDisco(discazo,"a", "b", "c", "d", "e")

console.log(discazo)


function Disco() {
    this.nombre = "";
    this.grupo = "";
    this.anoPublicacion = "";
    this.tipo = "";
    this.localizacion = 0;
    this.prestado = false;
}

function valoresDisco(disco,nombre,grupo,anoPublicacion,tipo,localizacion){
    disco.nombre = nombre;
    disco.grupo = grupo;
    disco.anoPublicacion = anoPublicacion;
    disco.tipo = tipo;
    disco.localizacion = localizacion;
}

function cambiarLocalizacion(disco,localizacion){
    disco.localizacion = localizacion;   
}
function prestado(disco){
    if(disco.prestado){
        disco.prestado = false;
    }else{
        disco.prestado = true;
    }
}

mostrarInformacion(discazo)
function mostrarInformacion(disco){
    console.log(disco.nombre);
    console.log(disco.grupo);
    console.log(disco.anoPublicacion);
    console.log(disco.tipo);
    console.log(disco.localizacion);
    console.log(disco.prestado);
}
