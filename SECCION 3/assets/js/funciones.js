function saludar( nombre ){
    // console.log( arguments )
    // console.log('Hola ' + nombre);

    return 10;
}

// const saludar2 = function(){
//     console.log('Hola mundo');
// }

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

saludar('Orlando', false, 40, 'Venezuela');

// saludarFlecha();
// saludarFlecha2('Pedro');

function sumar(a, b){
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b ;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() )