// Operador Condicional Ternario

const activo = true;
/* let mensaje = '';

if ( activo ){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}
console.log( mensaje ); */

// Uso con el AND -> Será muy útil en React
// const mensaje = activo && 'Activo';

// Uso con el Operador Condicional Ternario
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
console.log( mensaje );