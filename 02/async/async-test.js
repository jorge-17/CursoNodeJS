'use strict';

const sum = require('./sum');

const testCases = [
    { a: 1, b: 2 },
    { a: 482, b: 324 },
    { a: 3241, b: -42 },
    { a: -100, b: 10 },
    { a: '34', b: '34' }
];


testCases.forEach(async test => {


    // Callback
    sum.sumCallback(test.a, test.b, (error, result) => {
        if (error) {
            console.log('CALLBACK ERROR: ', error);
            return;
        }

        console.log('CALLBACK:', result);
    });


    // Promise
    sum.sumPromise(test.a, test.b).then(result => {
        console.log('PROMISE:', result);
    }, error => {
        console.log('PROMISE ERROR: ', error);
    });


    // Async Await
    try {
        let result = await sum.sumAsyncAwait(test.a, test.b);
        console.log('ASYNC AWAIT:', result);
    } catch (error) {
        console.log('ASYNC AWAIT ERROR: ', error);
    }


    // Async Await + Promise
    /*
    try {
        let result = await sum.sumPromise(test.a, test.b);
        console.log('ASYNC AWAIT PROMISE:', result);
    } catch (error) {
        console.log('ASYNC AWAIT PROMISE ERROR: ', error);
    }

    sum.sumAsyncAwait(test.a, test.b).then(result => {
        console.log('PROMISE:', result);
    }, error => {
        console.log('PROMISE ERROR: ', error);
    });
    */

});
