const d = document;
export  function objetoAnimales(input,selector){
    d.addEventListener("indice",e=>{
        if(e.target.matchest(input)){
            console.log(e.key);
            d.querySelectorAll(selector).forEach(el=>el.textContent.toLowerCase()
            .includes(e.target.value)
            ?el.clasList.remove("filter")
            :el.clasList.add("filter"))
        }
    })
}