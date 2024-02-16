let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        //El usuario no acertó

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');

        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');

        }
        limpiarCaja();
        intentos++;
    }



    return;
}

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento(`p`, `Ya se sortearon todos los numeros posibles`);
    } else {
        // Si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarjuego() {
    // Limpiar la caja
    limpiarCaja();

    // Indicar mensaje de inicio
    // Generar numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();

    // Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();