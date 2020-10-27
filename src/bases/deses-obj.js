// Desestructuración de Objetos
// Asignación Desestructurante
const persona = {
    nombre: 'Danniels',
    edad: '33',
    usuario: 'dankensoft'
}

const { nombre, edad, usuario } = persona;

console.log( nombre );
console.log( edad );
console.log( usuario );

// En una Función
const retornaPersona = ({ nombre, edad, usuario, rango = 'Developer' }) => {
    console.log( nombre, edad, rango, usuario );
}

retornaPersona( persona );

const useContext = ({ nombre, edad, usuario, rango = 'Developer' }) => {
    return {
        username: usuario,
        anios: edad,
        latlng: {
            lat: 14.5432,
            lng: -12.9983
        },
        phones: {
            mobile: 55555555,
            home: 33333333,
            office: 77777777
        }
    }
}

const { username, anios, latlng, phones: { mobile, home } } = useContext( persona );

console.log( username, anios );
console.log( latlng );
console.log( home, mobile );