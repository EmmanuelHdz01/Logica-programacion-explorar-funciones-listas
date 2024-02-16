let listaDeNumeros = [], dato = 0, numeroMayor = 0, numeroUsuario = 0;

function agregar() {
    numeroUsuario = document.getElementById('numero').value;
    listaDeNumeros.push(numeroUsuario);
    console.log(listaDeNumeros);
}

function comparar() {
    for (let contador = 0; contador < listaDeNumeros.length; contador++) {
        if (listaDeNumeros[contador] > numeroMayor) {
            numeroMayor = listaDeNumeros[contador];
            console.log(contador);
        }
    }
    console.log(numeroMayor);
}

function mensaje(elemento, texto) {
    dato = document.querySelector(elemento);
    dato.innerHTML = texto;
}