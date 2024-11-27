import { btnPedirCarta, disabled } from "../Utils/Utils";
import { Jugador } from "../entidad/Jugador";
import { PedirCartaSerivicio } from "./PedirCartaServicio";

const pedirCarta = new PedirCartaSerivicio();

export class DetenerJuegoServicio {
    detenerJuego(jugadores) {
        disabled(false, false, true);
        if (jugadores.length === 0) {
            throw 'no hay jugadores';
        }
        const juegoComputadora = this.existeComputadora(jugadores);

        if (juegoComputadora) {
            btnPedirCarta.disabled = true;
            pedirCarta.computadora(jugadores[0].getPuntuacion, jugadores);
            return;
        }
        Jugador.identificador++;
    }

    existeComputadora(jugadores) {
        return jugadores.some(jugadores => jugadores.getNombreJugador === 'Computadora');
    }
}