$FORM = document.getElementById('formulario');
$CREACION = document.getElementById('creacion');
$COCINERO = document.getElementById('cocinero');   
$DESTINATARIO = document.getElementById('destinatario');
$GRAMOS = document.getElementById('gramos');
$COMPOSICION = document.getElementById('composicion');
$NUMEROCUENTA = document.getElementById('numeroCuenta');

function handleSubmit(e) {
    e.preventDefault();
    
    let form = $FORM.value;
    let creacion = $CREACION.value;
    let cocinero = $COCINERO.value;
    let destinatario = $DESTINATARIO.value;
    let gramos = $GRAMOS.value;
    let composicion = $COMPOSICION.value;
    let numeroCuenta = $NUMEROCUENTA.value;
    var valido = true;

    if (creacion == false || isValidCreacion(creacion) == false){
        alert("Has introducido mal la fecha de creación")
        valido = false;
    }
    if( cocinero == false || isValidCocinero(cocinero) == false){
        alert("Has introducido mal el cocinero")
        valido = false;
    }
    if( destinatario == false || isValidDestinatario(destinatario) == false){
        alert("Has introducido mal el destinatario")
        valido = false;
    }
    if(gramos == false || isValidGramos(gramos) == false){
        alert("Has introducido mal los gramos")
        valido = false; 
    }
    let indice = composicion.indexOf('g')
    let gramosComposicion = composicion.substring(0,indice)
    
    if(composicion == false || isValidComposicion(composicion) == false || gramosComposicion != gramos){
        alert("Has introducido mal la composicion")
        valido = false;
    }
    if(numeroCuenta == false || isValidNumeroCuenta(numeroCuenta) == false){  
        alert("Has introducido mal el numero de cuenta")
        valido = false;
    }
    
    if(valido == true){
        var newUser = {creacion:creacion,cocinero:cocinero,destinatario: destinatario,gramos: gramos,composicion: composicion,numeroCuenta: numeroCuenta}
        console.log(newUser)
        var user = JSON.stringify(newUser);
        console.log(user);
    }
}


function isValidCreacion(creacion){
    const validacion = /^(([0][1-9])|([1-2][0-9])|([3][0-1]))\/[0-12]{2}\/\d{4}$/gm
    return validacion.test(creacion); 
}

function isValidCocinero(cocinero){
    const validacion = /^[A-Z]{2}\W\d{4}$/gm
    return validacion.test(cocinero);
}

function isValidDestinatario(destinatario){
    const validacion = /^([A-Z]{2,3})\_[a-z]+\:\d{4}$/gm
    return validacion.test(destinatario);
}
function isValidGramos(gramos){
    const validacion = /^\d{3}$|[1-4]\d{3}$|5000$/gm
    return validacion.test(gramos);
}
function isValidComposicion(composicion){
    
    const validacion = /^\d{3,4}g\w{1,2}\d{0,1}\w{1,2}\d{0,1}$/
    return validacion.test(composicion);
}

function isValidNumeroCuenta(numeroCuenta){
    let mapaLetras = {A : 1, B : 2, C : 3, D : 4, E : 5, F : 6,G : 7, H : 8, I : 9, J : 10,K : 11,
         L:12, M : 13, N : 14, O : 15, P : 16, Q : 17, R : 18, S : 19, T : 20, U : 21, V : 22, W : 23, X : 24, Y : 25, Z : 26};
    debugger
    let numero1 = mapaLetras[numeroCuenta.slice(0,1)]
    let numero2 = Number(mapaLetras[numeroCuenta.slice(1,2)])
    let primeraSuma = numero1 + numero2 
    let segundaSuma = Number(numeroCuenta.slice(2,3)) + Number(numeroCuenta.slice(3,4))
    let terceraSuma = 0
    let cuartaSuma = 0
    for (let index = 5; index < numeroCuenta.length; index++) {
        if(index>=5 && index<=10){
            terceraSuma += Number(numeroCuenta.slice(index,index+1))
        }else if(index>=11 && index<=16){
            cuartaSuma += Number(numeroCuenta.slice(index,index+1))
        }else{
            break;
        }
    }
    
    let resultadoDivision1 = parseInt(terceraSuma/6);
    let resultadoDivision2 = parseInt(cuartaSuma/6);
    
    let numeroPenultimo = Number(numeroCuenta.slice(18,19))
    let numeroUltimo = Number(numeroCuenta.slice(19,20));

    if(primeraSuma == segundaSuma && numeroPenultimo == resultadoDivision1 && numeroUltimo==resultadoDivision2) {
    const validacion = /^([A-Z]{2})(\d{2})\-(\d{12})\-(\d{2})$/gm
    return validacion.test(numeroCuenta);
    }else{
        return false
    }
}

$FORM.addEventListener('submit', handleSubmit)
