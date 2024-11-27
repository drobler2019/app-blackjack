export const nuevaCarta = (carta) => {
    const nuevaCarta = document.createElement('img');
    nuevaCarta.src = `../public/assets/static/${carta}.png`;
    nuevaCarta.alt = "carta";
    nuevaCarta.width = "90";
    return nuevaCarta;
};