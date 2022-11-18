//funcion que cacula el IMC
function calcularIMC(){
    let kilos = Number(document.getElementById("kilos").value);
    let altura = Number(document.getElementById("altura").value);
    const IMC = kilos / Math.pow(altura,2);
    alert("Su Índice de masa corporal es de: " + IMC.toFixed(2));
}

//funcion que cacula la FCM
function calcularFCM(){
    let edad = Number(document.getElementById("edad").value);
    const FCM = 220-edad;
    alert("Su Frecuencia cardíaca máxima es de: " + FCM);
}