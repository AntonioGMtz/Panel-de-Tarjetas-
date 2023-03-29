// Función para limitar a 2 líneas el nombre de la tarjeta
document.querySelectorAll(".-b-expander").forEach(function(el) {
    el.addEventListener("click", () => {
      el.classList.toggle("-b-text-undexpanded");
    });
});

// Función para realizar la busqueda de tags
document.addEventListener("keyup", e=>{
  if (e.target.matches("#buscador")){
    var input, filter, section, span, text, i;
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase();
    section = document.getElementById("listaTags");
    span = section.getElementsByTagName("span");
    for (i = 1; i < span.length; i++) {
      text = span[i].getElementsByTagName("i")[0];
      if (text) {
        if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
          span[i].style.display = "";
        } else {
          span[i].style.display = "none";
        }
      }
    }
  }
}); 

//  Funcion para leer de la API
$("#buscador").focus( cargaAjax );
$("#buscador").focusout( cargaAjax );
$( window ).on( "load", cargaAjax );
function cargaAjax() {
    
    $.ajax({
     type: "GET",
     url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     success: function (data) {
      $('#listaTags').empty();
      $.each(data, function (i, item) {
      var rows = "<span class='tag block'><span class='badge rounded-pill bg-col1 text-body-tertiary2'>" +
      "<i>+ " + item.name + "</i></span>";
      $('#listaTags').append(rows);
      });
      console.log(data);
     },
     failure: function (data) {
      alert(data.responseText);
     },
     error: function (data) {
      alert(data.responseText);
     }
    });
}

var span = document.getElementById("card1");
var sp2 = document.getElementById("card1-2");
var sp3 = document.getElementById("card2-1");
var sp4 = document.getElementById("card2-2");
var sp5 = document.getElementById("card3-1");
var sp6 = document.getElementById("card3-2");
var sp7 = document.getElementById("card4-1");
var sp8 = document.getElementById("card4-2");
var sp9 = document.getElementById("card5-1");
var sp10 = document.getElementById("card5-2");
var sp11 = document.getElementById("card6-1");
var sp12 = document.getElementById("card6-2");
var sp13 = document.getElementById("card7-1");
var sp14 = document.getElementById("card7-2");
var sp15 = document.getElementById("card8-1");
var sp16 = document.getElementById("card8-2");
var tagspan = document.getElementById("dt1");
var tagspan2 = document.getElementById("dt2");
var tagspan3 = document.getElementById("dt3");
var tagspan4 = document.getElementById("dt4");
var tagspan5 = document.getElementById("dt5");
var tagspan6 = document.getElementById("dt6");
var tagspan7 = document.getElementById("dt7");
var tagspan8 = document.getElementById("dt8");
var tagspan9 = document.getElementById("dt9");
var tagspan10 = document.getElementById("dt10");
var tagspan11 = document.getElementById("dt11");
var tagspan12 = document.getElementById("dt12");
var tagspan13 = document.getElementById("dt13");
var tagspan14 = document.getElementById("dt14");
var tagspan15 = document.getElementById("dt15");
var tagspan16 = document.getElementById("dt16");
var approved = 0
var neww = 0
var a2021 = 0
var a2020 = 0
var a2019 = 0
var draft = 0
var imprt = 0


function ingresar(){
  if(document.getElementById('check1').checked ){

    if(document.getElementById('check3').checked || document.getElementById('check4').checked || document.getElementById('check7').checked){
      tagspan.style.visibility = 'hidden';
    }
    else{
      tagspan.innerHTML = span.innerText;
      tagspan.style.visibility = 'visible';
    }
    if(document.getElementById('check5').checked ){
      tagspan2.style.visibility = 'hidden';
    }
    else{
      tagspan2.innerHTML = sp2.innerText;
      tagspan2.style.visibility = 'visible';
    }
    
  }
  else{
    tagspan2.style.visibility = 'hidden';
    tagspan.style.visibility = 'hidden';
  }
  if(document.getElementById('check2').checked ){
    tagspan3.style.visibility = 'visible';
    tagspan4.style.visibility = 'visible';
    tagspan3.innerHTML = sp3.innerText;
    tagspan4.innerHTML = sp4.innerText;
  }
  else{
    tagspan3.style.visibility = 'hidden';
    tagspan4.style.visibility = 'hidden';
  }

  if(document.getElementById('check3').checked ){
    tagspan5.innerHTML = sp5.innerText;
    tagspan6.innerHTML = sp6.innerText;
    tagspan5.style.visibility = 'visible';
    tagspan6.style.visibility = 'visible';
  }
  else{
    tagspan5.style.visibility = 'hidden';
    tagspan6.style.visibility = 'hidden';
  }
  if(document.getElementById('check4').checked ){
    tagspan7.innerHTML = sp7.innerText;
    tagspan8.innerHTML = sp8.innerText;
    tagspan7.style.visibility = 'visible';
    tagspan8.style.visibility = 'visible';
  }
  else{
    tagspan7.style.visibility = 'hidden';
    tagspan8.style.visibility = 'hidden';
  }
  if(document.getElementById('check5').checked ){
    tagspan9.innerHTML = sp9.innerText;
    tagspan10.innerHTML = sp10.innerText;
    tagspan9.style.visibility = 'visible';
    tagspan10.style.visibility = 'visible';
  }
  else{
    tagspan9.style.visibility = 'hidden';
    tagspan10.style.visibility = 'hidden';
  }
  if(document.getElementById('check6').checked ){
    tagspan11.innerHTML = sp11.innerText;
    tagspan12.innerHTML = sp12.innerText;
    tagspan11.style.visibility = 'visible';
    tagspan12.style.visibility = 'visible';
  }
  else{
    tagspan11.style.visibility = 'hidden';
    tagspan12.style.visibility = 'hidden';
  }
  if(document.getElementById('check8').checked ){
    tagspan15.innerHTML = sp15.innerText;
    tagspan16.innerHTML = sp16.innerText;
    tagspan15.style.visibility = 'visible';
    tagspan16.style.visibility = 'visible';
  }
  else{
    tagspan15.style.visibility = 'hidden';
    tagspan16.style.visibility = 'hidden';
  }
    

}
function ingresar7(){
  if(document.getElementById('check7').checked ){

    if(document.getElementById('check1').checked){
      tagspan13.style.visibility = 'hidden';
      tagspan.innerHTML = span.innerText;
      tagspan.style.visibility = 'visible';
    }
    else{
      tagspan13.innerHTML = sp13.innerText;
      tagspan14.innerHTML = sp14.innerText;
      tagspan13.style.visibility = 'visible';
      tagspan14.style.visibility = 'visible';
      tagspan.style.visibility = 'hidden';
    }
    
  }
  else{
    tagspan13.style.visibility = 'hidden';
    tagspan14.style.visibility = 'hidden';
  }

}

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


/*var span = document.getElementById("card1");
var tagspan = document.getElementById("dt1");
var bandera = false
check1.addEventListener("change", function(){
   if(bandera ){
    tagspan.innerHTML = span.innerText;
    bandera = false;
         
   }
   else{
    tagspan.innerHTML = "";
    bandera = true
   }
   
  })*/
  
 //Metodo para cargar la pagina de la api


function loadImage() {
fetch('https://64137b96a68505ea7334a07d.mockapi.io/tags')
.then(res => res.json())
.then(datos => {
    for(let i of datos){
        console.log(i.name);
        if(i.name == "Approved"){
          var text = document.createTextNode(i.name);
          
        document.getElementById("card1").appendChild(text);
        }
        if(i.name == "2019"){
          var text = document.createTextNode(i.name);
          document.getElementById("card1-2").appendChild(text);
        }
    }
});
  


}
