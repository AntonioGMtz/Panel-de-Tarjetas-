// Función para limitar a 2 líneas el nombre de la tarjeta
document.querySelectorAll(".-b-expander").forEach(function(el) {
    el.addEventListener("click", () => {
      el.classList.toggle("-b-text-undexpanded");
    });
});
// Función para realizar la busqueda de tags
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".articulo").forEach(fruta =>{
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
    }
});
$("#newTagBtn").click( cargaAjax );
$( window ).on( "load", cargaAjax );
function cargaAjax() {
    
    $.ajax({
     type: "GET",
     url: "https://641b3d2e9b82ded29d4dbf42.mockapi.io/api/tag/tags",
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     success: function (data) {
      $('#listaArticulos').empty();
      $.each(data, function (i, item) {
      var rows = "<span class='articulo block'><span class='badge rounded-pill bg-col1 text-body-tertiary2'>" +
      "+ " + item.Nombre + "</span>";
      $('#listaArticulos').append(rows);
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