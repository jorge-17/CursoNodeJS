// Nótese ./ especificando al ruta
const { padLeft, padRight } = require('./utils/pad');

// Busca en node_modules o instalaciones globales (npm install -g [...])
const _ = require('lodash');

// Importar un módulo que requiere configuración
const { mask, unmask } = require('./utils/mascara')({ mask: [0xF7293, 0x8364], radix: 16 });


// Nuestro módulo
console.log(padLeft('x', 10, '0'));
console.log(padRight('x', 10, '0'));

// Lodash
console.log(_.pad('x', 11, '_'));
console.log(_.padStart('x', 10, '_'));
console.log(_.padEnd('x', 10, '_'));

// Modulo configurable
const id = 304828;
const idMask = mask(id);
console.log(`Mascara: ${idMask}`);
console.log(`Original: ${unmask(idMask)}`)
