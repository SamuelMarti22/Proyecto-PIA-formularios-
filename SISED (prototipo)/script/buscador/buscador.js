import { objetoAnimales } from "./Objetos (informacion)/animales.js";
document.addEventListener('keyup', e =>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(objetoAnimales).forEach(elemento => {
            elemento.name.toLowerCase().includes(e.target.value.toLowerCase)
            ?elemento.classList.remove("filtro")
            :elemento.classList.add("filtro")
        })
    }
}) 
