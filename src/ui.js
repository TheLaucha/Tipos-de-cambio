export function mostrarCambio(cambios){
    const $cambios = document.querySelector("#lista-de-conversiones");
    $cambios.innerHTML ="";
    
    Object.keys(cambios).sort().forEach(moneda =>{
        const $monedaA = document.createElement("a");
        const $monedaLi = document.createElement("li");
        const $listaDeCambio = document.querySelector("#lista-de-conversiones");

        $monedaA.href = "#a";
        $monedaLi.innerHTML = `<strong>${moneda}</strong>: ${cambios[moneda]}`;

        $listaDeCambio.appendChild($monedaA);
        $monedaA.appendChild($monedaLi); 
    })
}

export function mostrarListadoDeMonedas(monedas,actualizar){
    const listaDeMonedas = document.querySelector("#lista-de-monedas");
    monedas.sort().forEach(base =>{
        const $monedaA = document.createElement("a");
        const $monedaLi = document.createElement("li");

        $monedaA.href = "#a";
        $monedaLi.textContent = base;
        $monedaLi.dataset.base = base;

        listaDeMonedas.appendChild($monedaA);
        $monedaA.appendChild($monedaLi);

        $monedaLi.addEventListener("click", () =>{
            const $itemActivo = document.querySelector(".activo");
            if($itemActivo){
                $itemActivo.classList.remove("activo");
            }
            $monedaLi.classList.add("activo");
            actualizar();
        })
    })
}

export function obtenerFecha(){
    const $fecha = document.querySelector("#date");
    return $fecha.value
}

export function obtenerBase(){
    const $base = document.querySelector(".activo");
    if($base){
        return $base.dataset.base
    }
    return undefined
}

export function mostrarCartelActualizacion(){
    document.querySelector("#lista-de-conversiones").innerHTML = "Cargando..."
}

export function actualizarFecha(actualizar){
    const $ultimaFecha = new Date();
    const $date = document.querySelector("#date");
    $date.valueAsDate = $ultimaFecha;
    $date.max = ($ultimaFecha.getFullYear() + "-" + ($ultimaFecha.getMonth()+1) + "-" + $ultimaFecha.getDate())
    addEventListener("change",actualizar)
}