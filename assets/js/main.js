// Función para limitar a 2 líneas el nombre de la tarjeta
document.querySelectorAll(".-b-expander").forEach(function(el) {
    el.addEventListener("click", () => {
      el.classList.toggle("-b-text-undexpanded");
    });
});
// Función para realizar la busqueda de tags
div = document.getElementById('tag1');
div2 = document.getElementById('tag2');
div3 = document.getElementById('tag3');
div4 = document.getElementById('tag4');
div5 = document.getElementById('tag5');
div6 = document.getElementById('tag6');
div7 = document.getElementById('+tag1');
div8 = document.getElementById('+tag2');
div9 = document.getElementById('+tag3');
div10 = document.getElementById('tag7');


//BUSCADOR letraXletra
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".articulo").forEach(fruta =>{
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
             
              div.style.display = '';
              div2.style.display = '';
              div3.style.display = '';
              div4.style.display = '';
              div5.style.display = '';
              div6.style.display = '';
              div10.style.display = '';
              div7.style.display = 'none';
             div8.style.display = 'none';
             div9.style.display = 'none';
             
              var value = document.getElementById('buscador').value;
        if (value === '') {
            div7.style.display = '';
            div8.style.display = '';
            div9.style.display = '';
            div.style.display = 'none';
            div.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none';
            div4.style.display = 'none';
            div5.style.display = 'none';
            div6.style.display = 'none';
            div10.style.display = 'none';
        }
    
              
             
        })
    }
   
});



//Agregar datos al JSON
function ingresarDatos(){
    // datos mandados con la solicutud POST
    var value = document.getElementById('buscador').value;
let _datos = {
    
    name: value, 
    
  }
  
  fetch('https://64137b96a68505ea7334a07d.mockapi.io/tags', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json));
}

mytag1 = document.getElementById('chTag');
mytag2 = document.getElementById('chTag2');

var bandera = true
check1.addEventListener("change", function(){
   
   if(bandera ){
        mytag1.style.display = '';
        mytag2.style.display = '';
        bandera = false
        
   }
   else{
    mytag1.style.display = 'none';
    mytag2.style.display = 'none';
    bandera = true
   }
   
  })
  
 