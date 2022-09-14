/* ------------ INFORMACION SOBRE LAS ESPECIES (TARJETAS) ---------------- */
import { objetoAnimales } from "./Objetos (informacion)/animales.js";
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded',()=>{
    loadData(objetoAnimales)
})
const loadData = objetoAnimales => {
    objetoAnimales.forEach(animales => {
        const { id,clasif, nombre, info, img} = animales
        templateCard.querySelector('h5').textContent = nombre
        templateCard.querySelector('img').setAttribute('src',img)
        templateCard.querySelector('.card-text').textContent = info
        templateCard.querySelector('.text-muted').textContent = clasif
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}