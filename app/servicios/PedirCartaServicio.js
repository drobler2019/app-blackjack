import { nuevaCarta } from "./CrearNuevaCarta";
import { contenedoresJugadores, strongList } from "./Inicializar";
import { Jugador } from "../entidad/Jugador";
import { tomarUnaCarta } from "./TomarCarta";
import { disabled, turno } from "../Utils/Utils";


export class PedirCartaSerivicio {

    pedirUnaCarta(jugadores) {
        const jugador = jugadores.find(jug => jug.getIdentificador === (Jugador.identificador + 1));
        const carta = tomarUnaCarta();
        jugador.setPuntuacion = this.valorCarta(carta);
        strongList[Jugador.identificador].textContent = jugador.getPuntuacion;
        const contenedorActual = contenedoresJugadores[Jugador.identificador];
        this.agregarHijo(contenedorActual, carta);
        this.jugadorDosGanador(jugadores, contenedorActual);
        turno.lastElementChild.textContent = `${jugador.getNombreJugador} 
        ${jugador.getNombreJugador === 'Jugador' ? `#${jugador.getIdentificador}` : ''}`;
        if (jugador.getPuntuacion > 21) {
            this.jugadorPerdedor(contenedorActual, jugadores, jugador);
            return;
        }
        if (jugador.getPuntuacion === 21) {
            disabled(false, true, true);
            Jugador.identificador++;
            contenedorActual.classList.add('ganador');
        }
    }

    jugadorDosGanador(jugadores, contenedorActual) {
        if (Jugador.identificador === jugadores.length - 1) {
            const [jugadorUno, jugadorDos] = jugadores;
            if ((jugadorDos.getPuntuacion > jugadorUno.getPuntuacion)
                && jugadorDos.getPuntuacion < 21) {
                contenedorActual.classList.add('ganador');
                disabled(false, true, true);
                return;
            }
            if (jugadorDos.getPuntuacion > 21) {
                disabled(false, true, true);
                contenedorActual.classList.add('perdedor');
                return;
            }

        }
    }

    jugadorPerdedor(contenedorActual, jugadores, jugador) {
        Jugador.identificador++;
        contenedorActual.classList.add('perdedor');
        disabled(false, true, true);
        this.computadora(jugador.getPuntuacion, jugadores);
    }

    computadora(puntosMinimos, jugadores) {
        const computadora = jugadores[jugadores.length - 1];
        if (puntosMinimos > 21 || puntosMinimos == 21) {
            return;
        }
        do {
            const carta = tomarUnaCarta();
            computadora.setPuntuacion = this.valorCarta(carta);
            const contenedorComputadora = contenedoresJugadores[contenedoresJugadores.length - 1];
            strongList[jugadores.length - 1].textContent = computadora.getPuntuacion;

            this.agregarHijo(contenedorComputadora, carta);

            if (computadora.getPuntuacion > puntosMinimos && computadora.getPuntuacion < 21) {
                contenedorComputadora.classList.add('ganador');
            }

            if (computadora.getPuntuacion > 21) {
                contenedorComputadora.classList.add('perdedor');
            }

        } while ((computadora.getPuntuacion <= puntosMinimos));

    }

    agregarHijo(contenedorCarta, carta) {
        contenedorCarta.children[1].appendChild(nuevaCarta(carta));
    }

    valorCarta(carta) {
        let valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor) ? (valor === 'A' ? 11 : 10) : parseInt(valor));
    }
}