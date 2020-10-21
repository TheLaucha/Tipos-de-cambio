import{obtenerCambios,obtenerMonedas} from './cambios.js';
import{
    mostrarCambio,
    mostrarListadoDeMonedas,
    obtenerFecha,
    obtenerBase,
    mostrarCartelActualizacion,
    actualizarFecha,
} from './ui.js';

async function actualizar(){
    mostrarCartelActualizacion();
    obtenerCambios(obtenerFecha(),obtenerBase())
    .then(cambios =>{
        mostrarCambio(cambios);
    })
}

async function inicializar() {
    obtenerMonedas().then((monedas) => {
        mostrarListadoDeMonedas(monedas,actualizar);
    });
  
    await actualizarFecha(actualizar);
}

inicializar();

