import { integrantes } from "./Objetos (informacion)/sobre_nosotros(info).js";

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded',()=>{
    loadData(integrantes)
})

const loadData = objetoAnimales => {
    objetoAnimales.forEach(animales => {
        const { name, rol} = animales
        templateCard.querySelector('.card-title').textContent = name
        templateCard.querySelector('.card-text').textContent = rol
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}