console.log('Proyecto SCRUM');
document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".badge rounded-pill bg-col1 text-body-tertiary shadow-sm ms-articulo").forEach(letra =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?letra.classList.remove("filtro")
              :letra.classList.add("filtro")
        })
  
    }
  
  
  })