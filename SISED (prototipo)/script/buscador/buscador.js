const d = document;
import { objetoAnimales } from "../Objetos (informacion)/animales.js";
function BuscadorAnimales(input){
    d.addEventListener("indice",e=>{
        if(e.target.matchest(input)){
            console.log(e.key);
            d.querySelectorAll("#template-card").forEach(e=>e.textContent.toLowerCase()
            .includes(e.target.value)
            ?e.setAttribute(id,"template-card filter")
            :e.setAttribute(id,"template-card"))
        }
    })
    console.log(input)
}

d.addEventListener('keyup',BuscadorAnimales)