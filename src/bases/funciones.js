// Funciones en JS
const saludar = function ( nombre ){
    return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const saludar4 = () => `Hola DKS`;

console.log( saludar('Danniels') );
console.log( saludar2('Rodri') );
console.log( saludar3('Wendy') );
console.log( saludar4() );

const getUser = () => ({
    uid: '098',
    username: 'dankensoft'
});

const user = getUser();

console.log( user );

const getUsuarioActivo = ( nombre ) => ({
    uid: '123ABC',
    username: nombre,
    status: 'ACTIVO'
});

const usuarioActivo = getUsuarioActivo( 'DanKenSoft' );

console.log( usuarioActivo );