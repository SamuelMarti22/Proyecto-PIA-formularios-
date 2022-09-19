/* ------------ INFORMACION SOBRE LAS ESPECIES (TARJETAS) ---------------- */
import { objetoHongos } from "./Objetos (informacion)/hongos.js";
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded',()=>{
    loadData(objetoHongos)
})
const loadData = objetoHongos => {
    objetoHongos.forEach(animales => {
        const { id,clasif, nombre, info, img} = animales
        let color = ''
        templateCard.querySelector('h5').textContent = nombre
        if (clasif == 'Peligroso'){
            color ='color: red'
        } else if (clasif =='Sano'){
            color ='color: green'
        } else {
            color ='color: yellow'
        }
        templateCard.querySelector('.text-muted').textContent = clasif
        templateCard.querySelector('.text-muted').setAttribute('style',color)
        templateCard.querySelector('img').setAttribute('src',img)
        templateCard.querySelector('.card-text').textContent = info
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}