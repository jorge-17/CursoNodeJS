/**
 * Scopes
 */
'use strict';

// var hoisted;

for (let i = 0; i < 10; i++) {
    // [...]
}
// console.log(i) --> Error, fuera del scope

for (var j = 0; j < 10; j++) {
    // [...]
}
console.log(j); // 10


console.log('antes:', hoisted); // undefined
var hoisted = 'definida en la primera linea, el valor se asigna aqui';
console.log('despues:', hoisted); // 'definida en la primera...'

// console.log(notHoisted); // Error
let notHoisted = 'Definida en esta linea';

functionsAreHoisted(); // Funciona!
function functionsAreHoisted() {
    console.log('Funciona!');
}


// Funciones tienen scope propio
let x = 1;
let y = 4;
function scopeTest(x, y) {
    let z = 0;
    x = x * 10;
    y = y * 10;
}


scopeTest(x, y);
// x === ?
// y === ?
// z === ?



// Referencia
let obj = { // Probar cambiando a 'const'
    x: 1,
    y: 4
}
function scopeTestObj(obj) {
    // obj = {
    //     x: 3,
    //     y: 5
    // };
    obj.z = 0;
    obj.x = obj.x * 10;
    obj.y = obj.y * 10;
}


scopeTestObj(obj);
// obj.x === ?
// obj.y === ?
// obj.z === ?