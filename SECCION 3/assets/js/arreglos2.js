let juegos = ['Zelda', 'Mario', 'Smash', 'Megaman']; // Arreglo
console.log('Largo:', juegos.length );

let primero = juegos[0]; // Posicion inicial de un arreglo | Siempre va ha ser 0
let ultimo  = juegos[ juegos.length - 1 ]; // Asi se obtiene el ultimo valor de un arreglo de forma dinamica

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => { // Recorre un arreglo y lo va imprimiendo por la longitud que tenga dicho arreglo
    console.log({elemento, indice, arr});
})

let nuevaLongitud = juegos.push( 'F-Zero' ); // Inserta un valor en un arreglo al final

console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem'); // Inserta un valor en un arreglo al inicio

console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop() // Elimina el ultimo elemento de un arreglo

console.log({juegoBorrado, juegos});

let pos = 1;

let juegosBorrados = juegos.splice( pos, 2); // Elimina elementos de un arreglo segun su indice o posicion y determina cuantos quieres eliminar a partir de esa posicion que partiste.

console.log({juegosBorrados, juegos});

let smashIndex = juegos.indexOf('Smash'); // Busca el indice o la posicion del elemento de un arreglo | Importante: Es CaSeSeNsItIvE

console.log({smashIndex, juegos});

// TODO: Referencia

//Prueba de subida al git

