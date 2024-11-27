import './style.css';
import { inicializarJuego } from "./app/servicios/Inicializar";
import { Jugador } from "./app/entidad/Jugador";
import { PedirCartaSerivicio } from "./app/servicios/PedirCartaServicio";
import { btnDetener, btnNuevoJuego, btnPedirCarta, disabled, turno } from "./app/Utils/Utils";
import { DetenerJuegoServicio } from './app/servicios/DetenerJuegoServicio';

const [unJugador, dosJugadores] = document.querySelectorAll('.modal_jugadores button');
const mascara = document.querySelector('#modal-mascara');
let jugadores = [];

const detenerJuego = new DetenerJuegoServicio();
const pedirCarta = new PedirCartaSerivicio();

unJugador.addEventListener('click', ({ target }) => {
    mascara.classList.toggle('desaparecer')
    const className = obtenerNombreClase(target);
    jugadores = inicializarJuego(className);
});

dosJugadores.addEventListener('click', ({ target }) => {
    mascara.classList.toggle('desaparecer');
    const className = obtenerNombreClase(target);
    jugadores = inicializarJuego(className);
});

btnNuevoJuego.addEventListener('click', () => {
    disabled(true, false, false);
    Jugador.identificador = 0;
    inicializarJuego();
    turno.lastElementChild.textContent = '';
    mascara.classList.toggle('desaparecer');
});

btnPedirCarta.addEventListener('click', () => pedirCarta.pedirUnaCarta(jugadores));

btnDetener.addEventListener('click', () => detenerJuego.detenerJuego(jugadores));

function obtenerNombreClase(target) {
    console.log('hola mundo')
    return target.className;
}

