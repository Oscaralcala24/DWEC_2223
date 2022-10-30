function cambiarTexto(){
    //Recojo los valores introducidos
    let cadena = document.getElementById("cadena").value;
    let patron = document.getElementById("patron").value;
    //Creo una nueva cadena para guardar letra por letra la nueva cadena
    var nuevaCadena = "";
    debugger
    //Inicializo un contador a 0 para saber cuando se cumple el patron
    var contador = 0;
    //Recorro la cadena
    for (let index = 0; index < cadena.length; index++) {
        //Si el contador coincide con el patron, cambiar la letra, si no, suma 1 al contador
        if(contador == patron){
            if (cadena[index] == cadena[index].toUpperCase()) {
                nuevaCadena += cadena[index].toLowerCase();
            }else{
                nuevaCadena += cadena[index].toUpperCase();

            }
            contador = 0;
        }else{
            nuevaCadena += cadena[index];
            contador++;
        }
    }
    document.getElementById("resultado").innerHTML = nuevaCadena; 
}