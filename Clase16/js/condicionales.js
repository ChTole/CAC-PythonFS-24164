// CONTROL DE FLUJO

// Estructuras condicionales
// - Ya vimos:  if - if...else 
// - Restan: if...else if...else - switch...case

console.log('Comienzo');
// LOS DATOS NO SE CODEAN O "HARDCODEAN".
let edad = 'cincuenta'; // supuesto dato proveniente de un form, prompt, etc
let validarEdad = Number(edad);

// Problema a resolver: situación ante el voto (en Argentina).
// - Menores de 16 años no pueden
// - 16 y 17 pueden, pero no es obligatorio
// - 18 a 70 años es obligatorio votar
// - mayores de 70 pueden, pero no es obligatorio.

// Sin validación del dato
// if (edad < 16) {
//     console.log('Aún no podés votar.');
// } else if (edad == 16 || edad == 17 || edad > 70) {
//     console.log('Podés votar, no es obligatorio.');
// } else {
//     console.log('Tu voto es obligatorio.');
// }

// Con validación del dato - Versión 1
if (edad > 0 && edad < 16) {
    console.log('Aún no podés votar.');
} else if (edad == 16 || edad == 17 || edad > 70 && edad < 120) {
    console.log('Podés votar, no es obligatorio.');
} else if (edad >= 18 && edad <= 70) {
    console.log('Tu voto es obligatorio.');
} else {
    console.log('Dato inválido!');
}

// Con validación del dato - Versión 2
if (edad > 0 && edad <120) {
    if (edad < 16) {
        console.log('Aún no podés votar.');
    } else if (edad == 16 || edad == 17 || edad > 70) {
        console.log('Podés votar, no es obligatorio.');
    } else {
        console.log('Tu voto es obligatorio.');
    }
} else {
    console.log('Dato inválido!');
}

// Con validación del dato - Versión 3
if (validarEdad > 0 && validarEdad <120 && validarEdad != NaN) {
    if (validarEdad < 16) {
        console.log('Aún no podés votar.');
    } else if (validarEdad == 16 || validarEdad == 17 || validarEdad > 70) {
        console.log('Podés votar, no es obligatorio.');
    } else {
        console.log('Tu voto es obligatorio.');
    }
} else {
    console.log('Dato inválido!');
}

console.log('Fin del algoritmo');



// Estructuras repetitivas indeterminadas (while - do...while)
// Estructuras repetitivas determinadas (for (desde,hasta,paso) - for...of - for...in)