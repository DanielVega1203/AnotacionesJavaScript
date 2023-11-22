//  Agrega condiciones &&
function MayorMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2===0 )console.log(true);
    else console.log(false);
};

MayorMenorYPar(12);
MayorMenorYPar(2);

console.log("=======")

// Escoge entre una o otra condicion ||
function operadorOR(str) {
    if(str === 'Henry' || str.length<2) console.log(true)
    else console.log(false)

};

operadorOR('z');
 
console.log("=======")

//Negacion !permiso (niega el resultado o lo cambia)

function negacion(num) {
    if (!num < 2) console.log(true);
}

negacion(5);

console.log("=======")

//Condicion completa 
// Siempre primero && luego ||
function condicionCompleta(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true)
    else console.log(false)
}
condicionCompleta(10);
condicionCompleta(6);
condicionCompleta(3);
condicionCompleta(5);

console.log("=======")

connsole.log(Boolean(5));

