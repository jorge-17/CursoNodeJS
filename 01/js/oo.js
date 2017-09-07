/**
 * Orientado a Objetos
 */

class Animal {

    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    get nombre() {
        return this._nombre.toUpperCase();
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        switch (tipo) {
            case 'MAMIFERO':
            case 'OVIPARO':
                this._tipo = tipo;
                break;
            default:
                this._tipo = 'DESCONOCIDO';
        }
    }

    get descripcion() {
        return `${this._tipo.toUpperCase()}: ${this._nombre}`;
    }

}

class Perro extends Animal {

    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this._raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre} HA LADRADO`);
    }

}

module.exports = exports = {
    Animal,
    Perro
};
