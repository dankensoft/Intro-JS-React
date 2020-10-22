// Objetos Literales

const persona = {
    nombre: 'Danniels',
    apellido: 'Castillo',
    edad: 33,
    direccion: {
        ciudad: 'Chiquimula',
        zip: 20001
    }
}

console.log( persona );
console.log( { persona } );
console.table( persona );

// Clonación de un Objeto
const persona2 = { ...persona };
persona2.nombre = 'Wendy';
console.log( persona2.nombre );

console.log( persona );
console.log( persona2 );
