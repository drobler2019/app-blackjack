import _ from "underscore";
import { TIPOS_CARTAS_ESPECIALES, TIPO_CARTAS, VALORES_CARTAS } from "../Utils/Utils";
let cartas = [];

export const crearCartas = () => {
    for (let valor of VALORES_CARTAS) {
        for (let tipo of TIPO_CARTAS) {
            cartas.push(valor + tipo);
        }
    }
    for (let especiales of TIPOS_CARTAS_ESPECIALES) {
        for (let tipo of TIPO_CARTAS) {
            cartas.push(especiales + tipo);
        }
    }
    return _.shuffle(cartas);
};