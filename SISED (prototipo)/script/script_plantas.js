/* ------------ INFORMACION SOBRE LAS ESPECIES (TARJETAS) ---------------- */
import { objetoPlantas } from "./Objetos (informacion)/plantas.js";
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded',()=>{
    loadData(objetoPlantas)
})
function SortArray(x, y){
    if (x.nombre < y.nombre) {return -1;}
    if (x.nombre > y.nombre) {return 1;}
    return 0;
}
var s = objetoPlantas.sort(SortArray);
console.log(s);
const loadData = objetoPlantas => {
    objetoPlantas.forEach(animales => {
        const { id,clasif, nombre, info, img} = animales
        let color = ''
        templateCard.querySelector('h5').textContent = nombre
        if (clasif == 'Peligroso'){
            color ='color: red'
        } else if (clasif =='No perjudicial'){
            color ='color: green'
        } else if (clasif=='Tóxico'){
            color='color:black'
        } else {
            color ='color: #FFDE00'
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