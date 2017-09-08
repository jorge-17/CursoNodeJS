function suma() {
    let param = Array.prototype.slice.call(arguments)
    let suma = 0;
    for (let valor of param) {
        suma += valor;
    }
    return suma;
}

function multiplicar(){
    ////
}

module.exports={
    suma,
    multiplicar
}