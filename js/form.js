const juegos = [];

const juegosObj = juegos.map(juego => {
    return {
      nombre: juego.nombre,
      imagen: juego.imagen,
      descripcion: juego.descripcion,
      getElement: function() {
        const template = document.querySelector("#juego-template");
        const juegoElement = template.content.cloneNode(true);
        juegoElement.querySelector(".card-title").textContent = this.nombre;
        juegoElement.querySelector(".card-img-top").src = this.imagen;
        juegoElement.querySelector(".card-text").textContent = this.descripcion;
        return juegoElement;
      }
    };
});

function buscarJuegos(event) {
    event.preventDefault();
    const busqueda = document.querySelector("#searchbar").value.toLowerCase().trim();
    const resultados = juegosObj.filter(juego => juego.nombre.toLowerCase().includes(busqueda));
    const contenedorResultados = document.querySelector("#resultados");
    contenedorResultados.innerHTML = "";
    if (resultados.length > 0) {
      resultados.forEach(resultado => {
        contenedorResultados.appendChild(resultado.getElement());
      });
    } else {
      const mensajeError = document.createElement("div");
      mensajeError.classList.add("alert", "alert-danger");
      mensajeError.textContent = "No se encontraron resultados";
      contenedorResultados.appendChild(mensajeError);
    }
  }

  const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", buscarJuegos);