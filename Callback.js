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