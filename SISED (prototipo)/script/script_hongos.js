/* ------------ INFORMACION SOBRE LAS ESPECIES (TARJETAS) ---------------- */
import { objetoHongos } from "./Objetos (informacion)/hongos.js";
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded',()=>{
    loadData(objetoHongos)
})
function SortArray(x, y){
    if (x.nombre < y.nombre) {return -1;}
    if (x.nombre > y.nombre) {return 1;}
    return 0;
}
var s = objetoHongos.sort(SortArray);
console.log(s);
const loadData = objetoHongos => {
    objetoHongos.forEach(animales => {
        const { id,clasif, nombre, info, img} = animales
        let color = ''
        templateCard.querySelector('h5').textContent = nombre
        if (clasif == 'Venenoso'){
            color ='color: red'
        } else if (clasif =='Tóxico'){
            color ='color: #182747'
        } else if (clasif=='Psicoactivo'){
            color='color:black'
        } else {
            color ='color: #FFDE00'
        }
        templateCard.querySelector('.text-muted').textContent = clasif
        templateCard.querySelector('.text-muted').setAttribute('style',color)
        templateCard.querySelector('img').setAttribute('src',img)
        templateCard.querySelector('.card-text').textContent = info
        templateCard.querySelector('.tarjeta').setAttribute('id', nombre)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}