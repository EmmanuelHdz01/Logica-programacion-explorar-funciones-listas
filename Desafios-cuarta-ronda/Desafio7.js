// let listaDeNumeros = [], dato = 0, numeroMayor = listaDeNumeros[0], numeroMenor = listaDeNumeros[0], numeroUsuario = 0;

// function agregar() {
//     numeroUsuario = document.getElementById('numero').value;
//     listaDeNumeros.push(numeroUsuario);
//     console.log(listaDeNumeros);
// }

// function comparar() {
//     for (let contador = 0; contador < listaDeNumeros.length; contador++) {
//         if (listaDeNumeros[contador] > numeroMayor) {
//             numeroMayor = listaDeNumeros[contador];
//             console.log(numeroMayor);
//         }
//     }
//     console.log(numeroMayor);
// }

// function mensaje(elemento, texto) {
//     dato = document.querySelector(elemento);
//     dato.innerHTML = texto;
// }

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);