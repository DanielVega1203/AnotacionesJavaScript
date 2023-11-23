//Un nuevo arreglo con numeros, 
//en los cuales los mayores que 3 sean false

Array.prototype.mayoresQueTres = function () {
    var arreggloModificado = [];

    for (var i = 0; i < this.length; i++) {
        if (this[i]>3) {
            arreggloModificado.push(false)
        } else{
            arreggloModificado.push(this[i])
        }
    }   
    return arreggloModificado;
}                                       

var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();
console.log(nuevoArreglo);

class Latinoamerica {
    constructor(){
        this.paises = []
    }
}

Latinoamerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais)
};

var continente = new Latinoamerica();
continente.agregarPais("Oceania")
console.log(continente.paises);