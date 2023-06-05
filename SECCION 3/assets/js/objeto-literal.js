let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }   
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('edad: ', personaje['edad']);

console.log('Coors: ', personaje.coords);
console.log('lat: ', personaje.coords.lat);

console.log('N° Trajes: ', personaje.trajes.length);
console.log('ultimo Traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo'
console.log('Vivo: ', personaje[x]);

// Mas detalles

delete personaje.edad;
console.log(personaje)

personaje.casado = true

const entriesPares = Object.entries( personaje );
console.log( entriesPares );


Object.freeze( personaje ); // Permite bloquear la asignacion de los valores de los objetos literales

personaje.dinero = 9999999;
personaje.casado = false;
personaje.direccion.ubicacion = 'Venezuela'; // En este se puede cambiar el valor porque es un objeto literal de un objeto literal, por ende se puede cambiar ya que solo se bloqueo un objeto literal de los dos

console.log( personaje )

const propiedades = Object.getOwnPropertyNames( personaje ); // Trae los nombres de las propiedades de un objeto literal
const valores     = Object.values( personaje ); // Trae los valores de las propiedades de un objeto literal
console.log( { propiedades, valores } );