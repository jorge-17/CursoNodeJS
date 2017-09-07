/**
 * Tipos
*/

// Numbers
let numbers = [
    { string: `0                         `, value: 0 },
    { string: `-0                        `, value: -0 },
    { string: `33                        `, value: 33 },
    { string: `-33                       `, value: -33 },
    { string: `3/3                       `, value: 3 / 3 },
    { string: `3/5                       `, value: 3 / 5 },
    { string: `0.34                      `, value: 0.34 },
    { string: `Infinity                  `, value: Infinity },
    { string: `-Infinity                 `, value: -Infinity },
    { string: `NaN                       `, value: NaN },
    { string: `12e5                      `, value: 12e5 },
    { string: `0xFF                      `, value: 0xFF },
    { string: `Number.MAX_VALUE          `, value: Number.MAX_VALUE },
    { string: `Number.MAX_SAFE_INTEGER   `, value: Number.MAX_SAFE_INTEGER },
    { string: `Number.EPSILON            `, value: Number.EPSILON },
    { string: `Math.PI                   `, value: Math.PI },
    { string: `Math.E                    `, value: Math.E },
    { string: `'0'                       `, value: '0' },
    { string: `'1'                       `, value: '1' },
    { string: `'Infinity'                `, value: 'Infinity' },
    { string: `new Number(0)             `, value: new Number(0) },
    { string: `Number(0)                 `, value: Number(0) },
];

console.log('Numbers');
describe(numbers);

let strings = [
    { string: `'A'                          `, value: 'A' },
    { string: `'a'                          `, value: 'a' },
    { string: `'BA'                         `, value: 'BA' },
    { string: `'.ba%342$5;12S._'            `, value: '.ba%342$5;12S._' },
    { string: `"a"                          `, value: "a" },
    { string: `\`a\`                          `, value: `a` },
    { string: `324..toString()              `, value: 324..toString() },
    { string: `23.23.toString()             `, value: 23.23.toString() },
    { string: `'dwsoftware'.toUpperCase()   `, value: 'dwsoftware'.toUpperCase() },
    { string: `String(1)                    `, value: String(1) },
    { string: `new String('texto')          `, value: new String('texto') },
    { string: `String('texto')              `, value: String('texto') }

];

console.log('Strings');
describe(strings);


let booleans = [
    { string: `true            `, value: true },
    { string: `false           `, value: false },
    { string: `!true           `, value: !true },
    { string: `!false          `, value: !false },
    { string: `!0              `, value: !0 },
    { string: `!1              `, value: !1 },
    { string: `!!0             `, value: !!0 },
    { string: `!!1             `, value: !!1 },
    { string: `true && false   `, value: true && false },
    { string: `!null           `, value: !null },
    { string: `!''             `, value: !'' },
    { string: `!!''            `, value: !!'' },
    { string: `![]             `, value: ![] },
    { string: `!{}             `, value: !{} },
    { string: `!undefined      `, value: !undefined },
    { string: `!!undefined     `, value: !!undefined }
];

console.log('Booleans');
describe(booleans);


let nulls = [
    { string: 'null       ', value: null },
    { string: 'undefined  ', value: undefined },
    { string: '[][0]      ', value: [][0] },
    { string: '{}.test    ', value: {}.test }
];

console.log('Nulls & Undefined');
describe(nulls);



/**
 * Describes types by creating a table
 * @param types
 */
function describe(types) {

    const HEADERS = ['Code', 'Result', 'type of'];

    let stringLength = HEADERS[0].length,
        valueLength = HEADERS[1].length,
        typeOfLength = HEADERS[2].length

    types.forEach(obj => {
        if (obj.string.length > stringLength) {
            stringLength = obj.string.length;
        }
        if (toString(obj.value).length > valueLength) {
            valueLength = toString(obj.value).length;
        }
        if ((typeof obj.value).length > typeOfLength) {
            typeOfLength = (typeof obj.value).length;
        }
    });

    function separator() {
        console.log(`|${'-'.repeat(stringLength + 2)}|${'-'.repeat(valueLength + 2)}|${'-'.repeat(typeOfLength + 2)}|`)
    }

    separator();
    console.log(`| ${HEADERS[0]}${' '.repeat(stringLength - HEADERS[0].length)} | ${HEADERS[1]}${' '.repeat(valueLength - HEADERS[1].length)} | ${HEADERS[2]}${' '.repeat(typeOfLength - HEADERS[2].length)} | `);
    separator();
    types.forEach(obj => {
        console.log(`| ${obj.string}${' '.repeat(stringLength - obj.string.length)} | ${obj.value}${' '.repeat(valueLength - toString(obj.value).length)} | ${typeof obj.value}${' '.repeat(typeOfLength - (typeof obj.value).length)} | `);
        separator();
    });
    console.log('\n'.repeat(3));
}

function toString(value) {
    if (value === null || value === undefined) {
        return typeof value;
    }

    if (value.toString) {
        return value.toString();
    }

    return value;
}