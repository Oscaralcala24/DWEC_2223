/*Crea un programa que pida al usuario que elija una opción del siguiente menú:

Potencia.
Raíz.
Redondeo.
Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.*/


const prompt = require("prompt-sync")({sigint:true})
//Creo do - while para pedir el parametro si se introduce mal
do{
    console.log("Elige una de las siguientes opciones: ")
    console.log("1. Potencia \n2. Raíz\n3. Redondeo\n4. Trigonometría")
    var eleccion = prompt()
}while(eleccion< 0 || eleccion>4)

//Swith que dependiendo del parametro realiza una funcion u otra
switch(eleccion){
    case "1":
        console.log("Introduce base: ")
        var base = prompt()
        console.log("Introduce exponente: ")
        var exponente = prompt()
        console.log("La potencia de "+ base + " elevado a " + exponente + " es: " + Math.pow(base,exponente))
        break;
    case "2":
        //Creo do - while para pedir el parametro si se introduce mal
        do{
            console.log("Introduce numero (no negativo): ")
            var numeroRaiz = prompt()
        }while(numeroRaiz < 0)
        console.log("El resultado de la raiz es : " + Math.sqrt(numeroRaiz))
        break;
    case "3":
        console.log("Introduce decimal: ")
        var decimal = prompt()
        console.log("El numero redondeado es: " + Math.round(decimal))
        break;
    case "4":
        do{
            console.log("Introduce angulo: ")
            var angulo = prompt()
        }while(angulo < 0 || angulo > 360)
        console.log("Su seno es: " + Math.sin(angulo))
        console.log("Su coseno es: " + Math.cos(angulo))
        console.log("Su tangente es: " + Math.tan(angulo))
        break;
}