formulario = document.getElementById('dejarComentarios')

let usuario = localStorage.getItem('Usuario')
let comentarios = localStorage.getItem('Comentarios')
let titulo = localStorage.getItem('Titulo comentario')
let comentarioSecundario= localStorage.getItem('comentarioSecundario')

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded',()=>{
    console.log(usuario, comentarios, titulo)
    loadData(usuario, comentarios, titulo)
})

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('hola')
    leerComentario();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha subido exitosamente su comentario',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout((e) => {
        window.location.reload()
    }, 1600)
})

const loadData = (usuario, comentarios, titulo) => {
    templateCard.querySelector('.tituloComentario1').textContent = titulo
    templateCard.querySelector('.comentario').textContent = comentarios
    templateCard.querySelector('.usuario').textContent = 'por ' + usuario
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
    items.appendChild(fragment)
}

const leerComentario = () =>{
    let comentarios = document.getElementById('comentarios').value
    let titulo = document.getElementById('titulo').value
    montarComentario(comentarios, titulo)
}

const montarComentario = (comentarios, titulo) => {
    localStorage.setItem('Comentarios', comentarios)
    localStorage.setItem('Titulo comentario',titulo)
}
