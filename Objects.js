var deportes = { 
    conBalon: ["Futbol", "Basketball","Rugby"], 
    sinBalon: ["Boxeo","Surf","Trekking"]
};


//Un objeto dentro de otro objeto
var persona = {
    Nombre: "Lucas", 
    Edad: 26, 
    Estudios: {esProgramador: true}
};
//Verificar qeu dato tiene
console.log(persona.Edad);


console.log('--------------');
//Editar un campo de los elementos (NOMBRE)
persona.Nombre = 'Martin'
console.log(persona.Nombre);


console.log('--------------');
//Cambiar el valor de los elementos (EDAD)
persona.Edad = 12
console.log(persona.Edad);


console.log('--------------');
//Asignar valores al objeto junto con elemento
var autos = {};
autos.marcas = ["Ford","Audi","Ferrari"]
console.log(autos);


console.log('--------------');
//Eliminar valores
delete autos.marcas;
console.log(autos);

console.log('--------------');
//funcion dentro de un objeto
var misFunciones = {
    saludar: function () {
    console.log('Hola');
}}
misFunciones.saludar();


console.log('--------------');
//DOT NOTATION
var Accesorios = {manos: ['Brazaletes', 'Pulseras'], cabeza: ['Gorra', 'Sombrero']}
console.log(Accesorios.manos);


console.log('--------------');
//BRACKET-NOTATION
//Agregar una propiedad a un objeto junto con su array, siempre tiene que ser en string.
Accesorios["piernas"] = ["Pantalones", "Shorts"]
console.log(Accesorios)


console.log('--------------');
//poniendo las comillas nos permite editar el nombre del parametro de la funcion
var comidas = {}
var diferenciasDeNotacciones = function (propUno,propDos) {
    comidas[propUno] = ["Frutas", "Vegetales"]
    comidas[propDos] = ["Hamburguesas", "Papas Fritas"];
}
//Asignamos el nombre que queremos que muestre (solo se puede si esta con Bracket-Notation)
diferenciasDeNotacciones("Saludable","NoSaludable");

console.log(comidas);

//Dot-Notation = .nombre
//Bracket-Notation = ["nombre"]


console.log('--------------');
//hasOwnProperty sirve para buscar la propiedad
var libro = {autores: "Borgues", genero: "Policial", año: 1990}
var tienepropuedad = libro.hasOwnProperty("autores");
console.log(tienepropuedad);

//Object.keys nos busca todas las propiedades de un objeto
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

//BUCLE FOR - IN (SOLO PARA RECORRER ELEMENTOS)
console.log('--------------');
var mundo = {continente: 7, paises: 195, ocenanos: 5};
for (var prop in mundo) {
   console.log("Esta es la propiedad " + prop)
   console.log("Este es el valor "+ mundo[prop]);
}