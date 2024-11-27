const TIPO_CARTAS = ['C', 'D', 'H', 'S'];
const TIPOS_CARTAS_ESPECIALES = ['A', 'J', 'Q', 'K'];
const VALORES_CARTAS = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const NOMBRE_JUGADORES = Object.freeze({
    NOMBRE_JUGADOR: 'Jugador',
    NOMBRE_COMPUTADORA: 'Computadora'
});
const [btnNuevoJuego, btnPedirCarta, btnDetener] = document.querySelectorAll('.botones > button');
const turno = document.querySelector('.turno');

function disabled(nuevoJuego = false, pedirCarta = false, detener = false) {
    btnNuevoJuego.disabled = nuevoJuego;
    btnPedirCarta.disabled = pedirCarta;
    btnDetener.disabled = detener;
}


export {
    TIPO_CARTAS,
    TIPOS_CARTAS_ESPECIALES,
    VALORES_CARTAS,
    NOMBRE_JUGADORES,
    btnNuevoJuego,
    btnPedirCarta,
    btnDetener,
    turno,
    disabled
}