import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //selecciona todos los input's, y los carga en un array

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {    //sale de foco...cndo se deja de interactuar con un input
        valida(input.target);
    });
});
