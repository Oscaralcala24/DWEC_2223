//Declaro array de numero enteros
let valores = [232,56,33,876,32,985,729,36,184];
//Uso la sintaxis spread para poder comprobar el numero maximo con Math.max()
let numMax = Number(Math.max(...valores));
console.log("El numero mayor es: " + numMax)
