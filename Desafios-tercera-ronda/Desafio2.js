let numeroUsuario = 0, contador = 0, factorial = 1;

function calcularFactorial() {
    // Se ontiene el numero ingresado por el usuario
    numeroUsuario = parseInt(document.getElementById('factorialUsuario').value);

    factorialUsuario(numeroUsuario);

    // Prueba de dato obtenido
    // console.log(numeroUsuario);
}

function factorialUsuario(n) {
    // numeroUsuario = numeroUsuario!;
    if (n != 0) {
        for (contador = 1; contador <= n; contador++) {
            factorial = factorial * contador;
            console.log(factorial);
        }
    } else {
        console.log('El factorial de 0 es 0');
    }

    // console.log(factorial);
}