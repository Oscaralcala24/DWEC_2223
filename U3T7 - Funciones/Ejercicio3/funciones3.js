
function conocerHoroscopo(){
    //Recojo la fecha introducida y creo un variable tipo Date
    let fechaNacimiento = document.getElementById("textoIntroducido").value;
    const fecha = new Date(fechaNacimiento);
    //Realizo un switch que dependiendo de la fecha introducida te mostrara un iframe u otro
    switch(fecha.getMonth()+1) {
        case 1:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='anubis_frame' src='https://www.worldhistory.org/trans/es/1-11903/anubis/'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='bastet_frame' src='https://www.worldhistory.org/trans/es/1-15010/bastet/#:~:text=Definición&text=Bastet%20es%20la%20diosa%20egipcia,las%20mujeres%20y%20a%20los%20niños.'> </iframe>";
            }
            break;
        case 2:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='bastet_frame' src='https://www.worldhistory.org/trans/es/1-15010/bastet/#:~:text=Definición&text=Bastet%20es%20la%20diosa%20egipcia,las%20mujeres%20y%20a%20los%20niños.'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='selket_frame' src='https://es.wikipedia.org/wiki/Serket#:~:text=Serket%2C%20es%20la%20diosa%20de,originalmente%20la%20deificación%20del%20escorpión.'> </iframe>";
            }
            break;
        case 3:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='selket_frame' src='https://es.wikipedia.org/wiki/Serket#:~:text=Serket%2C%20es%20la%20diosa%20de,originalmente%20la%20deificación%20del%20escorpión.'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='apep_frame' src='https://mitologia.fandom.com/es/wiki/Apep'> </iframe>";
            }
            break;
        case 4:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='apep_frame' src='https://mitologia.fandom.com/es/wiki/Apep'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='ptah_frame' src='https://mitologia.fandom.com/es/wiki/Ptah'> </iframe>";
            }
            break;
        case 5:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='ptah_frame' src='https://mitologia.fandom.com/es/wiki/Ptah'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='atum_frame' src='https://mitologia.fandom.com/es/wiki/Atum'> </iframe>";
            }
            break;
        case 6:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='atum_frame' src='https://mitologia.fandom.com/es/wiki/Atum'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='isis_frame' src='https://mitologia.fandom.com/es/wiki/Isis'> </iframe>";
            }
            break;
        case 7:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='isis_frame' src='https://mitologia.fandom.com/es/wiki/Isis'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='ra_frame' src='https://mitologia.fandom.com/es/wiki/Ra'> </iframe>";
            }
            break;
        case 8:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='ra_frame' src='https://mitologia.fandom.com/es/wiki/Ra'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='horus_frame' src='https://mitologia.fandom.com/es/wiki/Horus'> </iframe>";
            }
            break;
        case 9:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='horus_frame' src='https://mitologia.fandom.com/es/wiki/Horus'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='maat_frame' src='https://mitologia.fandom.com/es/wiki/Maat'> </iframe>";
            }
            break;
        case 10:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='maat_frame' src='https://mitologia.fandom.com/es/wiki/Maat'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='Osiris_frame' src='https://mitologia.fandom.com/es/wiki/Osiris'> </iframe>";
            }
            break;
        case 11:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='Osiris_frame' src='https://mitologia.fandom.com/es/wiki/Osiris'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='Hato_frame' src='https://mitologia.fandom.com/es/wiki/Hato'> </iframe>";
            }
            break;
        case 12:
            if(fecha.getDate() <= 15){
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='Hato_frame' src='https://mitologia.fandom.com/es/wiki/Hato'> </iframe>";
            }else{
                document.getElementById("resultado").innerHTML = "<iframe style='width: 80%; height: 800px;' name='anubis_frame' src='https://mitologia.fandom.com/es/wiki/Anubis'> </iframe>";
            }
            break;
       
}

}
