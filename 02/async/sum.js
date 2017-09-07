'use strict';

/**
 * Suma de a y b, utilizando el Callbacks como patrón de manejo de asincronía
 * @param a
 * @param b
 * @param cb
 */
function sumCallback(a, b, cb) {
    setTimeout(() => { // Procesamiento asíncrono

        let result = a + b;

        if (result < 0) {
            // Cuando ocurre un error, 'cb' es ejecutado utilizando el primer parámetro como transporte del error.
            cb(new Error('Resultado Negativo'));
            return; // En realidad no retornamos ningún valor. Solo detenemos la ejecución cuando un error ocurre.
        }

        // En caso de éxito, ejecutamos 'cb', utilizando null como valor en el
        // parámetro que identifica un error, y el resultado como segundo parámetro.
        cb(null, result);

    }, 3000);
}

/**
 * Suma de a y b, utilizando Promesas como patrón de manejo de asincronía
 * @param a
 * @param b
 * @returns {Promise}
 */
function sumPromise(a, b) {
    // Retornamos una nueva instancia de Promise
    return new Promise((resolve, reject) => { // '(resolve, reject) =>' == 'function(resolve, reject)'
        // Nótese que la promesa es retornada instantaneamente, previo al proceso asíncrono.
        setTimeout(() => {
            // return Promise(...) { ... } es incorrecto y no funcionará como es esperado

            let result = a + b;

            if (result < 0) {
                // Cuando ocurre un error, 'reject' es ejecutado con el error como parámetro.
                return reject(new Error('Resultado Negativo'));
            }

            // En caso de éxito, ejecutamos 'resolve', utilizando el resultado como parámetro.
            resolve(result);

        }, 3000);
    });
}

/**
 * Suma de a y b, utilizando Async / Await (ES7) como patrón de manejo de asincronía
 * @param a
 * @param b
 * @returns {Promise}
 */
async function sumAsyncAwait(a, b) {
    let result = await sumPromise(a, b);
    return result;
}


module.exports = {
    sumAsyncAwait,
    sumCallback,
    sumPromise
};
