export class Jugador {

    #identificador;
    #nombreJugador;
    #puntuacion;

    static identificador = 0;

    constructor(nombreJugador, identificador) {
        this.#nombreJugador = nombreJugador;
        this.#identificador = identificador;
        this.#puntuacion = 0;
    }
    set setPuntuacion(puntuacion) {
        this.#puntuacion += puntuacion;
    }

    get getPuntuacion() {
        return this.#puntuacion;
    }

    get getIdentificador() {
        return this.#identificador;
    }

    get getNombreJugador() {
        return this.#nombreJugador;
    }

    set setNombreJugador(nombreJugador) {
        this.#nombreJugador = nombreJugador;
    }

    reiniciarValor() {
        this.#puntuacion = 0;
    }

}