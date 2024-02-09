let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    console.log(numeroDeUsuario == numeroSecreto);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades acertaste el numero secreto en ${intentos} ${(intentos === 1 ) ? 'intento' : 'intentos'}`);
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }

    intentos++;

    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');