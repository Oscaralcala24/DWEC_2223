//Declaro array y un contador auxiliar
let arrayNumeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
let contadorAux = 0;
//Bucle for que recorre el arrar. Cuando sea impar, borro el numero de su posicion y lo introduzco al final del array.
//Si entra por el else, suma uno al contador auxiliar para no perder la siguiente posicion del array ya que al eliminar uno se saltaria el siguiente.
for (let i = 0; i < arrayNumeros.length; i++) {
    if(arrayNumeros[contadorAux] % 2  != 0){
        let numero = arrayNumeros[contadorAux];
        arrayNumeros.splice(contadorAux,1);
        arrayNumeros.push(numero);
    }else{
        contadorAux++;
    }
}

console.log(arrayNumeros.toString());