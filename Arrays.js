//Array crea una lista de elemento
var listadeCompras = [];
//Asigna en que posicion agrega el elemento
listadeCompras[3] = 'Tomates';
listadeCompras[1] = 'Lechuga';
console.log(listadeCompras);

//devuelve que dato tiene dicha posicion del elemento
//Opcion 1
var numeroDeLista = listadeCompras[1]
console.log(numeroDeLista);

//Opcion 2
console.log(listadeCompras[3])

//Array crea una lista de elemento
var listadeCompras2 = [];
//Asigna en que posicion agrega el elemento
listadeCompras2[2] = 'Profesor';
listadeCompras2[1] = 'Doctor';
//para saber cuandos elementos tiene el array
console.log(listadeCompras2.length);

var colores = ["amarillo", "azul"];
//inserta al ultimo
colores.push("rojo");
//inserta al principio
colores.unshift("verde");
//eliminar el ultimo registro
colores.pop();
//eliminar el primer registro
colores.shift();
console.log(colores);

//Para ver si existe tal elemento en el array
var pintores =  ["Alejo", "Adriano", "Miguel", "Gustavo"]
var incluyeAlejo =  pintores.includes('Alejo')
console.log(incluyeAlejo);

//Si todos los numero son mayores a 5 , o cumple la condicion
var numero = [1,6,8,9];
var cumpleCondicio = numero.every(num => {
    return num > 5;
});
console.log(cumpleCondicio);

//separar un array
var palabra = 'Henri'
var palabraSeparada = palabra.split('');
//quitar ultima letra y reemplazarla por otra
palabraSeparada.pop('i')
palabraSeparada.push('y')
console.log(palabraSeparada);
//juntar la palabra
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

console.log("=========");
var numero = [1,2,3,4];
//Listar todos los numeros por separado del array NUMERO
numero.forEach(num => console.log(num));

console.log("=========");
//Lista los numero menores a 4 del array NUMERO
numero.forEach(num => {
    if (num < 4) {console.log(num)}
});

console.log("=========");
//Lista los numero mayores a 2 del array NUMERO
numero.forEach(num => {
    if (num > 2) {
        console.log(num);
    }
});


console.log("=========");
//Suma 1 a los valores del array NUMERO
var SumaUno = numero.map (num => {
    return num + 1;
});
console.log(SumaUno);





//BUCLES

console.log("=========");
//Lista todos los elementos del array
var arr = [1,2,3,4]
for (var i = 0; i < 3; i++) {
    console.log(arr[i])
}

console.log("=========");
//Recorre para buscar si tiene la letra P, el split lo separa para buscar uno por uno
function encontrarLetraP(string) {
    var letras = string.split('');

    for (let i = 0; i < letras.length; i++) {
        if(letras[i] === "p"){
            console.log("Si contiene P");
        }
    }
}

encontrarLetraP("JavaScp");

console.log("=========");
//crea vacio el array
var ar = [];
//hace un bucle para agregar 5 veces 
while (ar.length < 5) {
    ar.push('NOOM');
}
console.log(ar);

//DIFERENCIA
//FOR = numero determinado de repeticiones que pongas en el segundo parametro 
//WHILE = funciona con condicion que recorre en el bucle

//FOREACH = Para recorrer todo el array y lo liste
var arrayTrabajos = ['Doctor','Profesor','Musico','Futbolista']
arrayTrabajos.forEach(function(ele,ind) {
    console.log('Elemento: ',ele,'Indice: ',ind);

});

console.log('-------------');

// MAP = para cambiar cambiar cada elemento o incrementarlo bajo una misma condicion
//       creando una copia
var array = [1,2,3,4]
var array2 = array.map (function (ele,ind) {
    console.log('Elemento: ',ele,'Indice: ',ind);
    return ele + 5
})
console.log('Array:', array);
console.log('Array2:', array2);

console.log('-------------');

//REDUCE = ejecuta en bucle el array con la intencion de concatenar los elementos
// Suma los elementos
var acumulador = array.reduce(function (ac,ele) {
    return ac + ele
})
console.log(acumulador);

//Juntar frases
console.log('-------------');
var saludos = ['Hola', 'que','tal','como','estas']
var saludo = saludos.reduce (function (ac,ele)  {
    return ac + ' ' + ele
})
console.log(saludo);


//ARGUMENTOS = recibe todo y lo concatena en un array
console.log('-------------');
function mostrar(...args) {
    console.log(args);
}
mostrar(1,2,3,4,5,6,7,8,9,10);
mostrar('Hola','Como','Estas')