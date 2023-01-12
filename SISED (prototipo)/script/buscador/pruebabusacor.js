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
document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll("#items").forEach(animal =>{
            document.querySelectorAll('.cosito').forEach(nombre =>{
                let nombreAnimal = nombre.querySelector('.card-title')
                if(nombreAnimal.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                    nombre.classList.remove("filtro") 
                nombre.classList.add("tarjeta")
                }
                else{
                    nombre.classList.add("filtro")
                    nombre.classList.remove("tarjeta")
                }   
            })
        })
    }
})