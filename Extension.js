class Persona{
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar (){
        console.log("Hola mi nombre es " + this.nombre + ", tengo " + this.edad);
    }
}

var martin = new Persona("Martin", 18);
martin.saludar()

class Programador extends Persona{
    constructor(nombre, edad, añosExperiencia){
        super(nombre,edad);
        this.añosExperiencia = añosExperiencia;
    }

    codear (){
        console.log("soy " + this.nombre + ". Codeo desde hace " + this.añosExperiencia)
    }
}

var programador = new Programador("Daniel", 35, 7)
programador.codear()
programador.saludar();