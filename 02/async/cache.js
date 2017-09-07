let cache = {};
let calls = 0;

function loadData(id) {
    if (cache[id]) {
        return cache[id];
    }
    return cache[id] = new Promise((resolve, reject) => { // Llamada a una API
        calls++;
        setTimeout(() => {
            resolve({ id });
        }, 1000);
    });
}

for (let i = 0; i < 10; i++) {
    loadData(i).then(console.log);
    loadData(i).then(console.log);
    loadData(i).then(console.log);
}

// Cuántas llamadas fueron realizadas? 

// Cómo podemos disponer del valor de 'calls' para cada llamada realizada?

// Cómo ejecutar una acción final cuando todas las llamadas hayan sido resueltas? -- hint: Promise.all