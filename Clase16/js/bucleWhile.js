// Estructuras repetitivas indeterminadas (while - do...while)

// Tomo elemento del DOM
let encabezado = document.querySelector('h1');
console.log(document);
console.log(encabezado.innerHTML);

// La repetición está sujeta a una condición (booleana).
let limite = 5;
let contador = 0;
let listaVacia = document.querySelector('#lista');
console.log(listaVacia);
console.log(typeof listaVacia);

while (contador < limite) {
    let item = document.createElement('li');
    // item.innerHTML = 'Dato dinámico' + String(contador);
    item.innerHTML = `Dato dinámico N° ${contador + 1}`;
    listaVacia.appendChild(item);
    contador++ //contador = contador + 1
}