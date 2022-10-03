document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".animal").forEach(animal =>{
            animal.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?animal.classList.remove("filtro")
            :animal.classList.add("filtro")
        })
    }
})