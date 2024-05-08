// Repaso array
// Propiedades: Mutables, ordenados o heterógeneos.

let instaladores = [
    'https://www.apachefriends.org/es/index.html', // 0
    'https://dev.mysql.com/downloads/workbench/',  // 1
    'https://www.python.org/downloads/'            // 2 o -1
]

let apps = ['XAMMP', 'MySQL Workbench', 'Python']

/* <li><a href="enlace">nombre de la app</a></li> */
let lista = document.querySelector('#listaArray');

for (let i = 0; i < apps.length; i++) { // 0  -  1   -   2
    let item = document.createElement('li'); // <li>
    let enlace = document.createElement('a'); // <a>
    enlace.innerHTML = apps[i]; // <a>XAMMP</a>
    enlace.href = instaladores[i]; // seteo con un atributo
    enlace.setAttribute('target', '_blank');  // seteo con un método
    console.log(enlace);
    item.appendChild(enlace); // item.innerHTML = enlace  <--- no funcionó
    lista.appendChild(item);
}


// Object
// Propiedades
// Orden: desordenado, no tiene índices, tiene claves.

// Tipo de dato: 
// claves --> colecciones no! sólo cadenas o números //  SON ÚNICAS!!!!
// valores --> cualquier tipo de dato (primitivo o complejo)

// Mutabilidad: son mutables!!!
// - puedo modificar valores existentes
// - puedo agregar pares clave:valor
// - puedo eliminar pares clave:valor

let objVacio = {} // objeto vacío
console.log(objVacio);
console.log(typeof objVacio); // object

let lenguaje = {
    nombre: 'Python', // clave: valor,
    interpretado: true,
    versiones: [1, 2, 3],
    "es falso": 0,
    0: false
}

console.log(lenguaje);
console.log(typeof lenguaje); // object
console.log(lenguaje.nombre);
console.log(lenguaje["versiones"]);
console.log(lenguaje["es falso"]); // si o si con notación por corchetes

lenguaje["0"] = true; // mutable!
console.log(lenguaje);

delete lenguaje["es falso"] // mutable X 2!!!
// delete lenguaje."es falso" // ASI NO!
console.log(lenguaje); 

console.log(lenguaje.descargas);

lenguaje["0"] = 'algún valor';
console.log(lenguaje); 

lenguaje.creador = "Guido Van Rossum";
console.log(lenguaje); 

// Recorrer un object
// for...in

for (let clave in lenguaje) { // recorre las claves de un objeto
    console.log(`clave: ${clave} - valor: ${lenguaje[clave]}`);
    //                  nombre            Python
}
 
console.log(Object.keys(lenguaje));

for (let clave of Object.keys(lenguaje)) { //  recorre los elementos de un array
    console.log(`clave: ${clave} - valor: ${lenguaje[clave]}`)
}