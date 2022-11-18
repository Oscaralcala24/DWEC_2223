var contadorImg = 0;
let elementosTd = document.querySelectorAll("td");
var arrayImg = [];

function listener(event){
    let objeto = event.currentTarget;
    validar(objeto);
}

function validar(td){
    arrayImg.push(td.firstChild);
    td.firstChild.classList.add("mostrar");

    if(arrayImg.length == 2){
        
        if(arrayImg[0].src == arrayImg[1].src){
            if(arrayImg[0].id != arrayImg[1].id){
                arrayImg[0].parentNode.classList.add("acertado");
                arrayImg[1].parentNode.classList.add("acertado");
                console.log(elementosTd)
            }
        }else{
            
            arrayImg[0].classList.remove("mostrar");
            arrayImg[1].classList.remove("mostrar");
        }
        
        arrayImg = [];
        
    }
    
}

elementosTd.forEach(td=>{
    
    td.addEventListener("click", listener, false); 
}) 