export class ContenedorJugadorServicio {

    constructor() {
        this.contenedorJugador = document.querySelector('.contenedor_jugadores');
    }

    crearContenedorJugador(jugador) {
        const elementoJugador = document.createElement('section');
        const titulo = document.createElement('h1');
        titulo.innerHTML = this.obtenerPlantillaPuntuacionJugador(jugador);
        const contenedorCartas = document.createElement('div');
        elementoJugador.append(titulo, contenedorCartas);
        this.contenedorJugador.appendChild(elementoJugador);
    }

    obtenerPlantillaPuntuacionJugador(jugador) {
        return `${jugador.getNombreJugador} ${jugador.getNombreJugador === 'Jugador' ? '#' : ''}
        <span>${jugador.getNombreJugador === 'Jugador' ? jugador.getIdentificador : ''}</span>
        - puntuación: <strong></strong>`;
    }

}