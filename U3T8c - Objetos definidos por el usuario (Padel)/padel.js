var idSocio = 1;
var arraySocios = [];
class Socio{
    /**
     * @param  {String} DNI DNi del socio
     * @param  {String} nombre nombre del socio
     * @param  {String} apellidos apellidos del socio 
     * @param  {String} fechaNacimiento fecha de nacimiento del socio
     * @param  {String} localidad localidad del socio
     */
    constructor(DNI,nombre,apellidos,fechaNacimiento,localidad){
        this.idSocio = idSocio++;
        this.DNI = DNI;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this._localidad = localidad;
    }

    
    /**
     * Cambia de localidad a un socio
     * @param  {String} localidadNueva Nueva localidad para cambiar dato del socio
     */
    set localidad(localidadNueva){
        this._localidad = localidadNueva;
    }

    
    /**
     * Damos de alta a un socio y lo introducimos en el array
     * 
     */
    altaSocio(){
        arraySocios.push(this)
    }

    
    /**
     * Da de baja y elimina del array a un socio pasandole por parametro su id o dni
     * @param  {String} IdDni - id o Dni de un socio
     */
    static bajaSocio(IdDni){
        arraySocios.forEach(element => {
            if(element.DNI == IdDni || element.idSocio == IdDni){
                let i = arraySocios.indexOf(element);
                arraySocios.splice(i,1)
            }
        });
    }

    /**
     * Recorre el array de los socios y elimina del array al socio que coincide con el dni que le pasamos por parametro
     * @param  {String} socioBuscar Le pasamos un DNI de un socio para buscarlo en el array
     * 
     */



    static buscarSocioDNI(socioBuscar){
        for (let index = 0; index < arraySocios.length; index++) {
            if(arraySocios[index].DNI == socioBuscar){
                arraySocios[index].informacionSocio();
            }
            
        }
    }



    /**
     * Recorre el array de los socios y elimina del array al socio que coincide con el nombre y apellidos que le pasamos por parametro
     * @param  {String} nombreSocio Nombre del socio
     * @param  {String} apellidosSocio apellidos del socio
     */
    static buscarSocioNombre(nombreSocio, apellidosSocio){
        
        for (let index = 0; index < arraySocios.length; index++) {
            if(arraySocios[index].nombre == nombreSocio && arraySocios[index].apellidos == apellidosSocio){
                arraySocios[index].informacionSocio();
            }
            
        }
    }



    /**
     * Recorre el array y cuando la categoria del socio coincide con la categoria que pasamos por parametro, muestra la informacion del socio llamando a informacionSocio() 
     * @param  {String} categoriaBuscar categoria a buscar
     */
    static mostrarSociosCategoria(categoriaBuscar){
        for (let index = 0; index < arraySocios.length; index++) {
            if(arraySocios[index].mostrarCategoria == categoriaBuscar){
                arraySocios[index].informacionSocio();
            }
            
        }
    }


    /**
     * Recorre el array y cuando la localidad del socio coincide con la localidad que pasamos por parametro, muestra la informacion del socio llamando a informacionSocio() 
     * @param  {} localidadBuscar localidad a buscar
     */
    static mostrarSociosLocalidad(localidadBuscar){
        for (let index = 0; index < arraySocios.length; index++) {
            if(arraySocios[index]._localidad == localidadBuscar){
                arraySocios[index].informacionSocio();
            }
            
        }
    }
    
    /**
     * Muestra en un console.log, toda la informacion de un socio
     */
    informacionSocio(){
        console.log("{idSocio: " + this.idSocio + ", Dni: " + this.DNI + ", nombre: " + this.nombre + ", apellidos " + this.apellidos + ", fechaNacimiento: " + this.fechaNacimiento +  ", localidad: " + this._localidad + ", categoria: " + this.mostrarCategoria() + "}");
    }


    /**
     * Este metodo comprueba la edad del socio y con diferentes "if", comprueba si es benjamin,alevin,infantil,cadete,juvenil o senior.
     * @returns {String} Devuelve la categoria del socio en cadena
     */
    mostrarCategoria(){
        let fechaActual = new Date().getFullYear();
        let fechaNacido = new Date(this.fechaNacimiento).getFullYear();
        let diferencia = parseInt(fechaActual-fechaNacido);
        if(diferencia==8 || diferencia == 9){
            return "Benjamin";
        }else if(diferencia == 10 || diferencia == 11){
            return "Alevin";
        }else if(diferencia == 12 || diferencia == 13){
            return "Infantil";
        }else if(diferencia == 14 || diferencia == 15){
            return "Cadete";
        }else if(diferencia == 16 || diferencia == 17 || diferencia == 18){
            return "Juvenil"
        }else if( diferencia >= 19){
            return "Senior"
        }else{
            return "Sin categoria"
        }
    }
    /**
     * Recorre el array y muesta la informacion de cada socio
     */
    static mostrarArray(){
        for (let index = 0; index < arraySocios.length; index++) {
            arraySocios[index].informacionSocio();
        }
    }
}
// Creacion de socios
let socio1 = new Socio("54180755T","Oscar","Alcala Espigares","1997-12-17","Camas");
let socio2 = new Socio("44543533L","Juan Luis","Hernandez Terron","2003-08-20","Bormujos");
let socio3 = new Socio("34324454A","Pedro","Garcia Lopez","2010-08-23","Sevilla");
let socio4 = new Socio("48578478I","Maria","Díez Luz","2013-02-12","Mairena del aljarafe");
let socio5 = new Socio("08437756K","Ismael","Canet Noriega","2010-08-20","Bormujos");
let socio6 = new Socio("80958085L","Sara","Hernandez Sarmiento","1998-05-24","Bormujos");

// Alta de socios
socio1.altaSocio();
socio2.altaSocio();
socio3.altaSocio();
socio4.altaSocio();
socio5.altaSocio();
socio6.altaSocio();
//Mostrar todos los socios
console.log("Mostrar todos los socios")
Socio.mostrarArray();

//Borrar socio por dni
console.log("\nBorrar socio por dni")
Socio.bajaSocio("44543533L");

//Mostrar todos los socios sin el borrado
console.log("\nMostrar todos los socios sin el borrado")
Socio.mostrarArray();

// Mostrar socio por dni
console.log("\nMostrar socio por dni")
Socio.buscarSocioDNI("54180755T");

//Mostrar socio por nombre y apellidos
console.log("\nMostrar socio por nombre y apellidos")
Socio.buscarSocioNombre("Oscar","Alcala Espigares");

//Mostrar todos los socios de una categoria
console.log("\nMostrar todos los socios de una categoria")
Socio.mostrarSociosCategoria("senior");

//Mostrar todos los socios de una localidad
console.log("\nMostrar todos los socios de una localidad")
Socio.mostrarSociosLocalidad("Bormujos")





