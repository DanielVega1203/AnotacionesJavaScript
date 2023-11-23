function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    
    this.informacion = function () {
        console.log("Este es un " + this.marca + "de color " + this.color);
    }
}

var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4)

console.log(miPrimerAuto);
console.log("---------");
console.log(miPrimerAuto.marca);

console.log("---------");

miPrimerAuto.informacion();

console.log("---------");

class Auto2{
    constructor (puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    //Metodo
    informacion () {
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miSegundoAuto = new Auto2(4, "Blanco", "Fiat", 2015, 4)

console.log(miSegundoAuto);
console.log("---------");
console.log(miSegundoAuto.marca);;
console.log("---------");
miSegundoAuto.informacion();

console.log("---------");

class Futbol{
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre (){
        console.log(this.jugador);
    }
}

var argentina = new Futbol("Messi")
var brasil = new Futbol("Neymar")

argentina.obtenerNombre()
brasil.obtenerNombre()

console.log('-----------');



class Persona{
    constructor(dni,nombre,apellido,ciudad){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
    }
    obtenerNombre (){
        console.log(this.nombre);
    }
}

var personal = new Persona("Daniel")
personal.obtenerNombre();