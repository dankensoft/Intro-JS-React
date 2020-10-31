// Promesas
import { getHeroeById, getHeroeByOwner } from 'imp-exp.js';

/* const promesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        // console.log( '2 segundos después' );
        // resolve();
        const heroes = getHeroeById( 2 );
        resolve( heroes );
        reject( 'No se encontró el Heroe...' );
        // console.log( heroes );
    }, 2000);
});

promesa.then( ( heroes ) =>{
    //console.log( 'Then de la Promesa' );
    console.log( heroes );
})
.catch( err => console.warn( err ) ); */

const getHeroeByIdAsync = ( id ) => {
    const promesa = new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            // console.log( '2 segundos después' );
            // resolve();
            const heroes = getHeroeById( id );
            if( heroes ){
                resolve( heroes );
            }else{
                reject( 'No se encontró el Heroe...' );
            }
            // console.log( heroes );
        }, 2000);
    });
    return promesa;
}

getHeroeByIdAsync( 11 ).then( heroe => console.log( heroe ) )
                      .catch( err => console.warn( err ) );
