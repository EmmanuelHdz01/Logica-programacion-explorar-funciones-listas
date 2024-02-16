let lenguaje = [];

function agregar() {
    let dato = document.getElementById('lenguaje').value;
    lenguaje.push(dato);
    mostrarLenguaje();
}

function mostrarLenguaje() {
    for (let contador = 0; contador < lenguaje.length; contador++) {
        console.log(lenguaje[contador]);
    }
}