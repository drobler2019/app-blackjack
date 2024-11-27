import { crearCartas } from "./InicializarCartas";

let cartas = crearCartas();

export const tomarUnaCarta = () => {
    if (cartas.length === 0) {
        throw "No hay cartas disponibles";
    }
    return cartas.pop();
}