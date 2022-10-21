/*Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)*/

do{ 
    const prompt = require("prompt-sync")({sigint:true})
    console.log("1. FORMATO 24h")
    console.log("2. FORMATO 12h")
    var eleccion = parseInt(prompt( ))
}while ( eleccion < 1 || eleccion > 2 )
    
let fecha = new Date()
if(eleccion === 1){ 
//14:35:07 (hora detallada con minutos y segundos)
console.log(fecha.getUTCHours() + ":"+ fecha.getUTCMinutes() + ":" + fecha.getUTCSeconds())
}else{
//02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)
    if(fecha.getUTCHours()<12){
        console.log(fecha.getUTCHours() + ":"+ fecha.getUTCMinutes() + ":" + fecha.getUTCSeconds() + " AM")
    }else{
        console.log(fecha.getUTCHours() + ":"+ fecha.getUTCMinutes() + ":" + fecha.getUTCSeconds() + " PM")
    }    
}
