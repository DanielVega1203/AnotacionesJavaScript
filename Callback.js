var devuelvoUsuario = function () {
    return "Camilo";
};

var devuelvoSaludo = function () {
    return "Hola";
};

var saludar = function (cb1,cb2) {
    return cb1() + " " + cb2();
};

var resultado = saludar(devuelvoSaludo,devuelvoUsuario)

console.log(resultado);

console.log("------------");
var devuelvoFrase = function (comida) {
    return "Hoy quiero comer " + comida
}

var hablar = function (comida,cb) {
    return cb(comida);
}

var fraseFinal = hablar("pizza", devuelvoFrase)

console.log(fraseFinal);


console.log("------------");

var devuelve1 = function (nombre) {
    return nombre;
}

var devuelve2 = function (edad) {
    return edad;
}

var fraseEntera = function (nombre,edad) {
    return "soy " + nombre + edad
}

var ingresaDatos = fraseEntera("Daniel", 24)
console.log(ingresaDatos);