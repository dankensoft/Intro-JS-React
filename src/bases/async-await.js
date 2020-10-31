// Async  - Await
/* const getImagenPromesa = () => {
    const promesa = new Promise( (resolve, reject) => {
        resolve('https://dankensoft.cloud');
    })
    return promesa;
}

getImagenPromesa().then( url => console.log( url ) ); */

// El resultado de arriba pero usando la palabra reservada Async
/* const getImagenPromesa = async() => {
    return 'https://dankensoft.cloud';
}

getImagenPromesa().then( url => console.log( url ) ); */

// Usando Async y el Await
const getImagenPromesa = async() => {
    try {
        const apiKey = 'uFgIhJJzx7rfOwaaW7xPeltu1ppGOIfT';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        console.log( data.images.original.url );

        // Colocamos la imagen en el HTML
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        // Manejo del Error...
        console.log( error );
    }
}

getImagenPromesa();
