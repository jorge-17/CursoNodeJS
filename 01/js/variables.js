'use strict';

console.log('\n\n### Variables ###');
// ES5
var totalAttendees = 10;
var startsAt = '6:00 PM';

var attendees = ['Person 1', 'Person 2'],
    endsAt = '9:00 PM',
    questionsAsked = 0;

var duration;
duration = 60 * 60 * 3; // Segundos * Minutos * Horas

var course = {
    name: 'Node.js Basico - intermedio',
    location: 'CSW - Wifi 1'
};

// ES6
const GITHUB_URL = 'https://github.com';

let instructor = {
    name: 'Ruben Rivera',
    github: `${GITHUB_URL}/nullrocks`
};

const tech = {
    language: 'JavaScript',
    runtine: 'Node.js',
    modules: ['Express']
};


// ??
 tech.language = 'JS';
 tech.modules.push('lodash');

 console.log(tech);

// tech = {};

console.log('\n\n### Tipos ###');
// Numbers
let number = 1,
    decimal = 1.123,
    x = 12e5, // 1200000
    hexa = 0xFF, // 255,
    infinity = 10 / 0, // Infinity
    negativeInfinity = -10 / 0 // -Infinity

// Strings
let singleQuote = 'Single quotes allows "double quotes"',
    doubleQuotes = "Double quotes allows 'single quotes'",
    text = `${course.name}: Today at ${startsAt} - ${course.location}`; // Literal, ES6+

console.log('singleQuote', singleQuote);
console.log('doubleQuotes', doubleQuotes);
console.log('text', text);

// Booleans
let truth = true,
    falsehood = false,
    parsed = !!number; // 1 -> true, 0 -> false
console.log('truth', truth);
console.log('falsehood', falsehood);
console.log('parsed', parsed);

// Arrays
let emptyArray = [],
    numbers = [1, 2, 3, 4, 3647567],
    mixed = [1, 'string', true, new Date, {}, [], null];

console.log('emptyArray', emptyArray);
console.log('numbers', numbers);
console.log('mixed', mixed);

// Objects
let object = {
    prop1: 'property 1',
    dataArray: ['array', 'of', 'string'],
    method1: function (param) {
        console.log('method1', param);
    },
    nestedObject: {
        moreData: 'data'
    }
};

object.newProperty = true; // punto
object['anotherProperty'] = 100; // corchete
console.log('object', object);


// Funciones
console.log('\n\n### Funciones ###');
function handleString(string) {
    //
}

const handleNumbers = (numbers) => {
    // [...]
};

const handleBoolean = function bools(bool) {

};

function multiplicar(num) {
    return x => num * x || 0;;
}

function transform(value, handler) {
    return handler(value);
}

console.log(transform(10, multiplicar(20)));


// Argumentos
console.log('\n\n### Argumentos ###');

function testFunction() {
    console.log();
    console.log('arguments: ', arguments);
    console.log('argsArr:   ', Array.prototype.slice.call(arguments));
    console.log('this:      ', this);
}

testFunction();
testFunction(1, 2);
testFunction('hola', null, () => { }, {});


// Call, Apply, Bind
console.log('\n\n### call, apply, bind ###');

//   Nueva Funcion                 Contexto Argumentos
//       v                             v    vvvvvvv
let testFunction2 = testFunction.bind(null, 'arg1', 'arg2', 'arg3');
testFunction2('arg4');

// testFunction es invocada instantaneamente
testFunction.call({ data: 'invocada con .call' }, 'arg1', 'arg2');

// La diferencia es que los argumentos son proveidos en forma de Array
testFunction.apply({ data: 'invocada con .apply' }, ['arg1', 'arg2']);
