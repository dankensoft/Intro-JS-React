// Template String

const nombre = 'Danniels';
const apellido = 'Castillo';

const nombreCompleto = ` ${ nombre } ${ apellido } `;

console.log( nombreCompleto );

function getSaludo( nombre ){
    return `Hola ${ nombre }`;
}

console.log( `Esto es un texto: ${ getSaludo( nombre ) }` );
