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

