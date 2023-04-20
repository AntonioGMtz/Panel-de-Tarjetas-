// Función para limitar a 2 líneas el nombre de la tarjeta
document.querySelectorAll(".-b-expander").forEach(function(el) {
    el.addEventListener("click", () => {
      el.classList.toggle("-b-text-undexpanded");
    });
});

// Función para realizar la busqueda de tags
document.addEventListener("keyup", e=>{
  if (e.target.matches("#buscador")){
    var input, filter, section, span, text, i, newTag;
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase();
    section = document.getElementById("listaTags");
    newTag = document.getElementById("newTag");
    span = section.getElementsByTagName("span");
    document.getElementById("newTag").innerHTML = input.value;
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

// Función agregar al Panel Tag de la lista
const arrayTag2 = new Array();
function tagAdd(idTagAdd,tagName){
  var flag = 0;
  for (i = 0; i < arrayTag2.length; i++) {
    if(arrayTag2[i] === tagName){
      indice = arrayTag2.indexOf(arrayTag2[i]);
      flag = 1;
      console.log(indice);
    }
  }
  console.log(arrayTag2);
  if(flag === 0){
    arrayTag2.push(tagName);
    $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + " <img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;' onClick='javascript: tagRemoveTags(" + idTagAdd + ",\"" + tagName + "\")'></span>");
  }
  if(flag === 1) {
    alert("¡El tag fue añadido anteriormente!");
  }
}

// Función para eliminar tag de la sección Tags en Panel Derecho
function tagRemoveTags(idTagAdd,tagName){
  $("#" + tagName + idTagAdd).remove();
    for (i = 0; i < arrayTag2.length; i++) {
    if(arrayTag2[i] === tagName){
      indiceD = arrayTag2.indexOf(arrayTag2[i]);
      console.log(indiceD);
    }
  }
  arrayTag2.splice(indiceD, 1);
}

// Eliminar tag de API
var idTag;
function tagDelete(idTag){
  // url of the data that is to be delete
  $.ajax( 'https://64137b96a68505ea7334a07d.mockapi.io/tags/' + idTag, {
    type : 'DELETE',
    success: function (data) {
      cargaAjax();
    }
  });
}

// Función para leer tags de la API
$("#buscador").focus( cargaAjax );
$( window ).on( "load", cargaAjax );
function cargaAjax() {
    
    $.ajax({
      async: false,
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Authorization",
              "Authorization");
      },
     type: "GET",
     url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     success: function (data) {
      arrayTags = data;
      $('#listaTags').empty();
      $.each(data, function (i, item) {
      var rows = "<span class='tag'><span class='badge rounded-pill bg-col1 text-body-tertiary2'>" +
      "+<a style='cursor: pointer; text-decoration: none;' onClick='javascript:tagAdd(" + item.id + ",\"" + item.name + "\")';><i>" + item.name + "</i></a>&nbsp;&nbsp;&nbsp;<a style='cursor: pointer; text-decoration: none;' onClick='javascript:tagDelete(" + item.id + ")';>✘</a></span>";
      $('#listaTags').append(rows);
      });
     },
     failure: function (data) {
      alert(data.responseText);
     },
     error: function (data) {
      alert(data.responseText);
     }
    });
};

//Agregar datos al JSON.
$("#boton_terminar").click( ingresarDatos );
function ingresarDatos(){
  // datos mandados con la solicutud POST
  var value = document.getElementById('buscador').value;
  let _datos = {
    name: value,
  };
  var found = 0;
  for (i = 0; i < arrayTags.length; i++) {
    if(arrayTags[i]['name'] === _datos['name']){
      found = 1;
    }
  }
  if(found === 0){
    fetch('https://64137b96a68505ea7334a07d.mockapi.io/tags', {
      method: "POST",
      body: JSON.stringify(_datos),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json());
  }
  if(found === 1){
    alert("¡Tag ya existe!");
  }
  cargaAjax();
};

// Función para colocar las tags de las tarjetas en el Panel Derecho
document.getElementById('check1').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check2').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check3').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check4').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check5').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check6').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check7').addEventListener("change", obtenerTagsTarjeta, false);
document.getElementById('check8').addEventListener("change", obtenerTagsTarjeta, false);

function obtenerTagsTarjeta(){
  const id = this.getAttribute("id");
  if(id === "check1"){ selector = "tagContainer1"; idTag = "tagspan1"; }
  if(id === "check2"){ selector = "tagContainer2"; idTag = "tagspan2"; }
  if(id === "check3"){ selector = "tagContainer3"; idTag = "tagspan3"; }
  if(id === "check4"){ selector = "tagContainer4"; idTag = "tagspan4"; }
  if(id === "check5"){ selector = "tagContainer5"; idTag = "tagspan5"; }
  if(id === "check6"){ selector = "tagContainer6"; idTag = "tagspan6"; }
  if(id === "check7"){ selector = "tagContainer7"; idTag = "tagspan7"; }
  if(id === "check8"){ selector = "tagContainer8"; idTag = "tagspan8"; }
  if (this.checked == true) {
    var contenedor = document.querySelector('#' + selector);
    var spans = contenedor.querySelectorAll("span");
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='" + idTag + "'>" + span.textContent +  " <img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>&nbsp;");
    });
  }
  else{
    var spans = document.querySelectorAll('#' + idTag);
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}