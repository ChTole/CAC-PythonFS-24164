// Estructuras repetitivas indeterminadas 
// Vimos: while 
// Resta: do...while
let limite = 1; // modificar valor y observar comportamiento
let contador = 1;
let lista = document.querySelector('#lista');

do { // se jecuta por lo menos una vez
    let item = document.createElement('li');
    item.innerHTML = `Dato N° ${contador}`;
    lista.appendChild(item);
    contador++
} while (contador < limite);

// do {
//     pedir contraseña
// } while (contraseña no coincida && no supere los intentos)