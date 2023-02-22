//Crea de manera dinámica (es decir, al cargarse la página) el formulario que definimos en el tema anterior (tarea U4T1).
//Ten en cuenta que el formulario deberá tener los atributos necesarios para que, al crearse, tenga la misma funcionalidad que el que creaste en html.
//No olvides añadir las etiquetas <label> a cada uno de los elementos.


let formulario = document.createElement("form");

let labelNombreDisco = document.createElement("label");
labelNombreDisco.htmlFor = "nombre";
labelNombreDisco.textContent = "Introduce nombre del disco";
let inputNombreDisco = document.createElement("input");
inputNombreDisco.type = "text";
inputNombreDisco.name = "nombre";
inputNombreDisco.id = "nombre";



let labelNombreGrupo = document.createElement("label");
labelNombreGrupo.htmlFor = "grupo";
labelNombreGrupo.textContent = "Introduce nombre del grupo";
let inputNombreGrupo = document.createElement("input");
inputNombreGrupo.type = "text";
inputNombreGrupo.name = "grupo";
inputNombreGrupo.id = "grupo";



let labelAno = document.createElement("label");
labelAno.htmlFor = "ano";
labelAno.textContent = "Introduce año de publicación";
let inputAno = document.createElement("input");
inputAno.type = "date";
inputAno.name = "ano";
inputAno.id = "anoPublicacion";



let labelTipo = document.createElement("label");
labelTipo.htmlFor = "tipo";
labelTipo.textContent = "Introduce estilo musical";
let selectTipo = document.createElement("select");
selectTipo.name = "tipo";
selectTipo.id = "tipoMusica";
let option1 = document.createElement("option");
option1.value = "Rock";
option1.textContent = "Rock";
let option2 = document.createElement("option");
option2.value = "Pop";
option2.textContent = "Pop";
let option3 = document.createElement("option");
option3.value = "Punk";
option3.textContent = "Punk";
let option4 = document.createElement("option");
option4.value = "Indie";
option4.textContent = "Indie";

 

let labelNum = document.createElement("label");
labelNum.htmlFor = "numero";
labelNum.textContent = "Introduce numero de estanteria";
let inputNum = document.createElement("input");
inputNum.type = "number";
inputNum.name = "numero";
inputNum.id = "numeroEstanteria";



let labelEstado = document.createElement("label");
labelEstado.htmlFor = "estado";
labelEstado.textContent = "Esta prestado";
let inputEstado = document.createElement("input");
inputEstado.type = "checkbox";
inputEstado.name = "estado";
inputEstado.id = "estado";


introducirElementos(labelNombreDisco,inputNombreDisco)
introducirElementos(labelNombreGrupo,inputNombreGrupo)
introducirElementos(labelAno,inputAno)
selectTipo.appendChild(option1);
selectTipo.appendChild(option2);
selectTipo.appendChild(option3);
selectTipo.appendChild(option4);

introducirElementos(labelTipo,selectTipo)
introducirElementos(labelNum,inputNum);
introducirElementos(labelEstado,inputEstado);
document.body.appendChild(formulario)


function introducirElementos(label,input){
    formulario.appendChild(label);
    formulario.appendChild(input);
    formulario.appendChild(document.createElement("br"));
}




