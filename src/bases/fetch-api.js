// Fetch API

const apiKey = 'uFgIhJJzx7rfOwaaW7xPeltu1ppGOIfT';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

/* peticion.then( resp => {
    // console.log( resp );
    resp.json().then( data => {
        console.log( data );
    })
} */
// Promesa en Cadena:
peticion.then( resp => resp.json())
        .then( ({ data }) => {
            console.log( data.images.original.url );
            // Colocamos la imagen en el HTML
            const { url } = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );
        })
        .catch( err => console.warn( err ));
        