document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".indiceContenido1").forEach(animal =>{
            animal.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?animal.classList.remove("filtro")
            :animal.classList.add("filtro")
        })
        document.querySelectorAll(".indiceContenido2").forEach(animal =>{
            animal.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?animal.classList.remove("filtro")
            :animal.classList.add("filtro")
        })
    }
})