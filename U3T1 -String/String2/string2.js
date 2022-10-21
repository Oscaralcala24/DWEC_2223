/*Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.*/

const prompt = require("prompt-sync")({sigint:true})

//Pido contraseña al usuario
console.log("Introduce propuesta constraseña: ")
var propuestaContrasena = prompt()

// Condicion si se valida o no
if(isValidPropuestaContrasena(propuestaContrasena) == true){
    console.log("La contraseña es correcta!")
}else{
    console.log("La contraseña es incorrecta!")
}

// Funcion para validar contraseña
function isValidPropuestaContrasena(propuestaContrasena){

const validacion = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_\-@#$%&]).{8,16}$/

return validacion.test(propuestaContrasena)
}
