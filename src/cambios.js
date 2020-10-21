export async function obtenerCambios(fecha = "latest", base = "EUR"){
    const $URL = "https://api.exchangeratesapi.io/";
    return fetch(`${$URL}${fecha}?base=${base}`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => respuestaJSON.rates);
}

export async function obtenerMonedas(){
    return obtenerCambios().then((resultado) => Object.keys(resultado).concat("EUR"));
}


