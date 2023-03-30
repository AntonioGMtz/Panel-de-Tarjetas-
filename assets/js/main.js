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


// Función agregar a Panel Tag de la lista
function tagAdd(idTagAdd,tagName){
$("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + " <img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;' onClick='javascript: tagRemoveTags(" + idTagAdd + ",\"" + tagName + "\")'></span>");
if(document.getElementById('check1').checked){
  $("#Card1Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}
if(document.getElementById('check2').checked){
  $("#Card2Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}

if(document.getElementById('check3').checked){
  $("#Card3Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}

if(document.getElementById('check4').checked){
  $("#Card4Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}

if(document.getElementById('check5').checked){
  $("#Card5Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}

if(document.getElementById('check6').checked){
  $("#Card6Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}

if(document.getElementById('check7').checked){
  $("#Card7Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}

if(document.getElementById('check8').checked){
  $("#Card8Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + "</span>");
}


}

function ingresar(idTagAdd,tagName){
  if(document.getElementById('check1').checked){
    $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id='" + tagName + idTagAdd + "'>" + tagName + " <img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;' onClick='javascript: tagRemoveTags(" + idTagAdd + ",\"" + tagName + "\")'></span>");


  }
}

// Función para eliminar tag de la sección Tags en Panel Derecho
function tagRemoveTags(idTagAdd,tagName){
$("#" + tagName + idTagAdd).remove();

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
$("#boton_terminar").on( "click", cargaAjax );
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
}

// Función para leer tags de la API en la tarjeta 

function cargaAj() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card1Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span1'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span1'>" +   item.name + "</span>";
      }
      
      $('#Card1Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj2() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card2Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span2'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span2'>" +   item.name + "</span>";
      }
      
      $('#Card2Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj3() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card3Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span3'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span3'>" +   item.name + "</span>";
      }
      
      $('#Card3Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj4() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card4Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span4'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span4'>" +   item.name + "</span>";
      }
      
      $('#Card4Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj5() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card5Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span5'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span5'>" +   item.name + "</span>";
      }
      
      $('#Card5Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj6() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card6Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span6'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span6'>" +   item.name + "</span>";
      }
      
      $('#Card6Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj7() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card7Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span7'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span7'>" +   item.name + "</span>";
      }
      
      $('#Card7Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}
function cargaAj8() {
  $.ajax({
   type: "GET",
   url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   
   success: function (data) {
    var num1 = Math.round(Math.random() * 9);
    var num2 = Math.round(Math.random() * 9);
    $('#Card8Tags').empty();
    $.each(data, function (i, item) {
      if(num1 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span8'>" +   item.name + "</span>";
      }
      if(num2 == i){
        var rows = "<span class='badge rounded-pill bg-col1 text-body-tertiary2' id = 'span8'>" +   item.name + "</span>";
      }
      
      $('#Card8Tags').append(rows);
    });
   },
   failure: function (data) {
    alert(data.responseText);
   },
   error: function (data) {
    alert(data.responseText);
   }
  });
}

function obtenerTextoDerecho1() {
  var checkbox = document.getElementById("check1");

  if (checkbox.checked == true) {
    var spans = document.querySelectorAll('#span1');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan1'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan1');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }


}
function obtenerTextoDerecho2(){
  var checkbox2 = document.getElementById("check2");
  if (checkbox2.checked == true) {
    var spans = document.querySelectorAll('#span2');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan2'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan2');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}
function obtenerTextoDerecho3(){
  var checkbox3 = document.getElementById("check3");
  if (checkbox3.checked == true) {
    var spans = document.querySelectorAll('#span3');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan3'>" + span.textContent + "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan3');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}
function obtenerTextoDerecho4(){
  var checkbox4 = document.getElementById("check4");
  if (checkbox4.checked == true) {
    var spans = document.querySelectorAll('#span4');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan4'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan4');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}
function obtenerTextoDerecho5(){
  var checkbox5 = document.getElementById("check5");
  if (checkbox5.checked == true) {
    var spans = document.querySelectorAll('#span5');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan5'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan5');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}
function obtenerTextoDerecho6(){
  var checkbox6 = document.getElementById("check6");
  if (checkbox6.checked == true) {
    var spans = document.querySelectorAll('#span6');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan6'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan6');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}
function obtenerTextoDerecho7(){
  var checkbox7 = document.getElementById("check7");
  if (checkbox7.checked == true) {
    var spans = document.querySelectorAll('#span7');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan7'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan7');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}
function obtenerTextoDerecho8(){
  var checkbox6 = document.getElementById("check8");
  if (checkbox6.checked == true) {
    var spans = document.querySelectorAll('#span8');
    spans.forEach(function(span) {
      $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='tagspan8'>" + span.textContent +  "<img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>");
      });  
  }
  else{
    var spans = document.querySelectorAll('#tagspan8');
    spans.forEach(function(span) {
      span.remove();
      }); 
  }
}





//Agregar datos al JSON.
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


//Llenar los datos aelatorios de la app

function loadImage() {
  cont = 0;
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