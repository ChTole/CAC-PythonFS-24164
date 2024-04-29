// Estructuras repetitivas determinadas (for (desde,hasta,paso) - for...of - for...in)

// Arrays: arreglos, matriz (unidimensional), vector, colecciones
// Dato (objeto) complejo.
// Propiedades:
// - Orden: son ordenados
// - Tipo de datos: cualquier tipo de dato (primitivo o complejo) => heterógeneos
// - Mutabilidad: si, puedo modificar la cantidad y los elementos

let lenguajes = ['Python', 'JavaScript', 'Java', 'PHP', 'Fortran', 'C++'];
//                  0           1           2      3       4         5
console.log(lenguajes);
console.log(typeof lenguajes); // object
console.log(lenguajes instanceof Array); // "molde" es Array

console.log(lenguajes[2]);
lenguajes.push(['HTML', 'CSS']); // agrega elemento al final
console.log(lenguajes);
lenguajes[4] = 'R'
console.log(lenguajes);
console.log(lenguajes.length);

let listaArray = document.querySelector('#listaArray');

for (let i = 0; i < lenguajes.length; i++ ){
    let item = document.createElement('li');
    item.innerHTML = `${lenguajes[i]}`; // Python = f'{dato}'
    item.className = 'itemFor';
    listaArray.appendChild(item);
}


let listaArray2 = document.querySelector('#listaArray2');

for (let lenguaje of lenguajes) { // recorrer un iterable
    let item = document.createElement('li');
    item.innerHTML = `${lenguaje}`; // Python = f'{dato}'
    item.className = 'itemFor';
    listaArray2.appendChild(item);
}

console.log(lenguajes);






// Breve reseña POO
// En js esto "sintactic sugar" => porque TODOS son PROTOTIPOS
// class Persona {}; // object
// class Usuario extends Persona {}; // object -> instancia de Persona -> hereda de Persona
// class Admin extends Persona{}; // object -> instancia de Persona -> hereda de Persona

// let user = new Usuario(); // también es una instancia

// Autoboxing
// let frase = new String(); // no es recomendable, porque existe autoboxing
// let frase = 'paradigma'; // typeof 'string' => dato primitivo
// // convierte en objeto -> obtiene el atributo -> devuelve a primitivo  <= AUTOBOXING
// console.log(frase.length);
// // convierte en objeto -> obtiene el atributo -> devuelve a primitivo  <= AUTOBOXING
// console.log(frase.toUpperCase());
