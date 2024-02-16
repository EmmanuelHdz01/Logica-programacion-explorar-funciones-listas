let lenguaje = [];

function agregar() {
    let dato = document.getElementById('lenguaje').value;
    lenguaje.push(dato);
    mostrarLenguaje();
}

function mostrarLenguaje() {
    for (let contador = lenguaje.length; contador > 0; contador--) {
        console.log(lenguaje[contador - 1]);
    }
}