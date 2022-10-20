//Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).
//Recuerda que los meses empiezan desde el número 0

let finalCurso = new Date('2023-06-24').getTime();
let fechaActual = new Date().getTime();
let resultado = finalCurso - fechaActual;


console.log(parseInt(resultado / (1000*60*60*24)));
