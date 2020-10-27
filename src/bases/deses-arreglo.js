// Desestruturación de Arreglos
const personaje = [ 'Goku', 'Vegeta', 'Trunks' ];
const [ , , personaje3 ] = personaje;
console.log( personaje3 );

// Uso en Función
const retornaArreglo = () => {
    return [ 'ABC', 123 ];
}
const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log( 'Hola DKS' ) } ];
}
const [ nombre, setNombre ] = useState( 'DanKenSoft' );
console.log( nombre );
setNombre();