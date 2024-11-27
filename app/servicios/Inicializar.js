import { ContenedorJugadorServicio } from "./ContenedorJugadorServicio";
import { crearCartas } from "./InicializarCartas";
import { NOMBRE_JUGADORES } from "../Utils/Utils";
import { Jugador } from "../entidad/Jugador";

export let contenedoresJugadores = null;
export let strongList = null;
const contenedorJugadorServicio = new ContenedorJugadorServicio();

let jugadores = [];
const contenedorJugadores = document.querySelector('.contenedor_jugadores');

export const inicializarJuego = (identificadorVista) => {
    crearCartas();
    if (jugadores.length > 0 || identificadorVista === 'nuevoJuego') {
        jugadores = [];
        contenedorJugadores.innerHTML = '';
        return;
    }
    for (let i = 0; i < 2; i++) {
        let nombreJugador = null;
        if (identificadorVista === 'UnJugador') {
            nombreJugador = getNombreJugador(i, 2, identificadorVista);
        } else {
            nombreJugador = NOMBRE_JUGADORES.NOMBRE_JUGADOR;
        }
        jugadores.push(new Jugador(nombreJugador, i + 1));
    }
    jugadores.forEach(jugador => contenedorJugadorServicio.crearContenedorJugador(jugador));

    strongList = [...document.querySelectorAll('strong')];
    contenedoresJugadores = [...contenedorJugadores.children];
    return jugadores;
}

function getNombreJugador(posicion, numeroJugadores, identificadorVista) {
    return (posicion === numeroJugadores - 1 && identificadorVista === 'UnJugador')
        ? NOMBRE_JUGADORES.NOMBRE_COMPUTADORA
        : NOMBRE_JUGADORES.NOMBRE_JUGADOR;
}