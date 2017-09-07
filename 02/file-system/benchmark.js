const fs = require('fs');

const TIMES = 100;
const FILE = './test.txt'; // big-file.txt

console.time('Sync');
for (let i = 0; i < TIMES; i++) {
    let data = fs.readFileSync(FILE);
    process.stdout.write('.');
}
console.timeEnd('Sync');

console.time('Async');
for (let i = 0; i < TIMES; i++) {
    fs.readFile(FILE, (error, data) => {
        process.stdout.write('.');
    });
}

process.on('exit', (code) => {
    console.timeEnd('Async');
});

// let interval = setInterval(() => {
//     process.stdout.write('#');
// }, 100);