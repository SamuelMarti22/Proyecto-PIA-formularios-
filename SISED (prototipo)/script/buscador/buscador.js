document.addEventListener('keyup', e =>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(container).forEach(elemento => {
            elemento.querySelector('.card-title').textContent.toLowerCase().includes(e.target.value.toLowerCase)
            ?elemento.classList.remove("filtro")
            :elemento.classList.add("filtro")
        })
    }
}) 
