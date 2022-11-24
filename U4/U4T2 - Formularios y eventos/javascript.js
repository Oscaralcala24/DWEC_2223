var contadorAux = 0;
var contadorImg = 0;
let elementosTd = document.querySelectorAll("td");
var arrayImg = [];
var objetoAnterior
function listener(event){
    let objeto = event.currentTarget;
    validar(objeto);
}
function validar(td){
    arrayImg.push(td.firstChild);
    td.firstChild.classList.add("mostrar");
    if(arrayImg.length == 2){
        if(arrayImg[0].id != arrayImg[1].id){
            if(arrayImg[0].src == arrayImg[1].src){
                arrayImg[0].parentNode.classList.add("acertado");
                arrayImg[1].parentNode.classList.add("acertado");
                console.log(elementosTd);
                arrayImg[0].removeEventListener('click', listener);
                arrayImg[1].removeEventListener('click', listener);
                arrayImg = []; 
                document.getElementById("numero").value = ++contadorAux;
            }else{
                setTimeout(borrarElemento,1000);
            }
        }else{
            setTimeout(borrarElemento,1000);
        }
    }
}

elementosTd.forEach(td=>{
    td.addEventListener("click", listener, false); 
}) 

function borrarElemento(){
    arrayImg[0].classList.remove("mostrar");
    arrayImg[1].classList.remove("mostrar");
    arrayImg = [];
}