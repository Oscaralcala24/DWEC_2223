//Creo la clase medico con sus propiedades
class Medico{
    constructor(nombre,personasCuradas,hospitalDestino){
        this._nombre = nombre;
        this._personasCuradas = personasCuradas;
        this._hospitalDestino = hospitalDestino;
    }
    //Getters de la clase medico
    get nombre(){
        return this._nombre;
    }
    get personasCuradas(){
        return this._personasCuradas;
    }
    get hospitalDestino(){
        return this._hospitalDestino;
    }
    //Setter de la clase medico
    set nombre(nombre){
        if(typeof nombre == 'string'){
            this._nombre = nombre;
        }
        else{
            console.log("No hago nada")
        }
    }  
    set personasCuradas(personasCuradas){
        if(typeof personasCuradas == 'number'){
            this._personasCuradas = personasCuradas;
        }else{
            console.log("No hago nada")
        }
    }  
    set hospitalDestino(hospitalDestino){
        if(typeof hospitalDestino == 'string'){
            this._hospitalDestino = hospitalDestino;
        }else{
            console.log("No hago nada")
        }
    }  
    //Metodos de la clase medico
    curarPersona(){
        this._personasCuradas++;
    }
    mostrarDatos(){
        return "El medico se llama " + this.nombre + ", su hospital de destino es " + this.hospitalDestino + " y lleva curadas " + this.personasCuradas + " personas";
    }
}


//Creo la clase medico cirujano que extiende de medico.
class MedicoCirujano extends Medico{
    constructor(nombre,personasCuradas,hospitalDestino,especialidad){
        super(nombre, personasCuradas,hospitalDestino);
        this._especialidad = especialidad;
    }
    //Getters de la clase medico cirujano
    get especialidad(){
        return this._especialidad;
    }
    get nombre(){
        return this._nombre;
    }
    get personasCuradas(){
        return this._personasCuradas;
    }
    get hospitalDestino(){
        return this._hospitalDestino;
    }
    //Setter de la clase medico cirujano
    set nombre(nombre){
        if(typeof nombre == 'string'){
            this._nombre = nombre;
        }
        else{
            console.log("No hago nada")
        }
    }  
    set personasCuradas(personasCuradas){
        if(typeof personasCuradas == 'number'){
            this._personasCuradas = personasCuradas;
        }else{
            console.log("No hago nada")
        }
    }  
    set hospitalDestino(hospitalDestino){
        if(typeof hospitalDestino == 'string'){
            this._hospitalDestino = hospitalDestino;
        }else{
            console.log("No hago nada")
        }
    }  
    set especialidad(especialidad){
        if(typeof especialidad == 'string'){
            this._especialidad = especialidad;
        }
    }
    //Metodos de la clase medico cirujano
    mostrarDatos(){
        return "El medico cirujano se llama " + this.nombre + ", su hospital de destino es " + this.hospitalDestino + ", lleva curadas " + this.personasCuradas + " personas y su especialidad es " + this.especialidad;
    }
}    


let medico1  = new Medico("Pepe",2,"Virgen del Rocio");
let medico2  = new Medico("Juan",5,"San Juan de Dios");
medico1.curarPersona();
console.log(medico1.mostrarDatos())
medico2.curarPersona();
medico2.curarPersona();
medico2.curarPersona();
console.log(medico2.mostrarDatos())



let medicoCirujano1 = new MedicoCirujano("Oscar",200,"Virgen del rocio", "traumatológica");
medicoCirujano1.curarPersona();
medicoCirujano1.curarPersona();
medicoCirujano1.curarPersona();
medicoCirujano1.curarPersona();
console.log(medicoCirujano1.mostrarDatos())
