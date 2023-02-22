
// El número de párrafos de la página.
let parrafos = document.getElementsByTagName("p");
console.log(parrafos.length);

//El texto del segundo párrafo.
let textoSegundoParrafo = parrafos[1].textContent;
console.log(textoSegundoParrafo);

//El número de enlaces de la página.
let enlaces = document.getElementsByTagName("a");
console.log(enlaces.length);

//La dirección del primer enlace.
let direccionPrimerEnlace = enlaces[0].href;
console.log(direccionPrimerEnlace);

//La dirección del penúltimo enlace.
if(enlaces.length > 1){
    let direccionUltimoEnlace = enlaces[enlaces.length-2]
    console.log(direccionUltimoEnlace);
}else{
    console.log("No hay enlaces");
}



//El número de enlaces que apuntan a /wiki/Municipio
let direccionesEnlaces = document.getElementsByTagName("a");
let contador = 0;
for (let index = 0; index < direccionesEnlaces.length; index++) {
    if(direccionesEnlaces[index].href.includes("/wiki/Municipio")){
        contador++;
    }
    
}
console.log(`Hay ${contador} enlaces que apuntan a "/wiki/Municipio"`);

//El número de enlaces del primer párrafo.


let numEnlacesParrafo1 =  parrafos[0].getElementsByTagName("a").length;
console.log(`Hay ${numEnlacesParrafo1} numero de enlaces del primer párrafo`);




