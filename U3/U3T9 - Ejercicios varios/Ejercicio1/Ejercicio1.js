let arrayNumeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
//contadorAux guarda la posicion del ultimo 3 encontrado
var contadorAux = 0
//contador guarda el numero de 3 que se ha encontrado
var contador3 = 0;
//posicion guarda la posicion del 3 actual en el array
var posicion = 0;

//While que se ejecuta mientras encuentre un 3, cuando no encuentra y el ultimo indexOf ha devuelto -1, no entra mas.
while (contadorAux != -1){
    //Condicion if, si no ha encontrado ningun 3 aun, empieza a contar desde contadorAux que es igual a 0, si ya a encontrado alguno, empieza desde contadorAux+1,
    // para saltarse el primer 3
    if (contador3 == 0){
        posicion = arrayNumeros.indexOf(3,contadorAux);   
    }else{
        posicion = arrayNumeros.indexOf(3,contadorAux+1);  
    } 
    //Solo se ejecuta cuando la posicion es distinta de -1
    if(posicion != -1){
        console.log("El 3 nº " + ++contador3 + " se encuentra en la posicion " + posicion);      
    }
    contadorAux = posicion;
}

