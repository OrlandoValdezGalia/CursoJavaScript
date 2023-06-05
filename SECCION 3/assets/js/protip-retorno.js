// function CrearPersona( nombre, apellido ){
//     return { nombre, apellido }
// }

const CrearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona = CrearPersona('Orlando', 'Valdez');
console.log( persona );

function imprimeArgumentos(){
    console.log( arguments )
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log( {edad, args} )

    return args
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(20, true, false, 'Orlando', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: NuevoApellido } =  CrearPersona('Orlando', 'Valdez');
console.log({ NuevoApellido });

let tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log(  "nombre: ", personaje.nombre );
//     console.log(  "codeName: ", personaje.codeName );
//     console.log(  "vivo: ", personaje.vivo );
//     console.log(  "edad: ", personaje.edad );
//     console.log(  "trajes: ", personaje.trajes );
// }

const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes } ) => {    

    console.log({ nombre })
    console.log({ codeName })
    console.log({ vivo })
    console.log({ edad })
    console.log({ trajes })
}

imprimePropiedades( tony );