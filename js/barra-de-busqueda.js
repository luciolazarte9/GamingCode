const juegos = [
    { titulo: 'Counter Strike 2', genero: 'Shooter', plataforma: 'PC' },
    { titulo: 'Days Gone', genero: 'Aventura', plataforma: 'PC' },
    { titulo: 'UFC 4', genero: 'Deportes', plataforma: 'PlayStation' },
    { titulo: 'Need For Speed', genero: 'Aventura', plataforma: 'PC' },
    { titulo: 'Warframe', genero: 'Accion', plataforma: 'PC' },
    { titulo: 'Fifa 23', genero: 'Deportes', plataforma: 'PC' },
    { titulo: 'APEX Legends', genero: 'Shooter', plataforma: 'PC' },
    { titulo: 'Metro Exodus', genero: 'Accion, Aventura', plataforma: 'PC' },
];

// Obtener el formulario y el contenedor de resultados
const formulario = document.querySelector("#formulario");
const contenedorResultados = document.querySelector("#resultados");

// Agregar el evento de búsqueda al formulario
formulario.addEventListener("submit", function(event) {
  // Evitar que se envíe el formulario de forma predeterminada
  event.preventDefault();

  // Obtener el valor del campo de búsqueda
  const valorBusqueda = document.querySelector("#searchbar").value.toLowerCase();

  // Filtrar la lista de juegos según el valor de búsqueda
  const juegosFiltrados = juegos.filter(function(juego) {
    return juego.titulo.toLowerCase().includes(valorBusqueda) || juego.plataforma.toLowerCase().includes(valorBusqueda);
  });

  // Mostrar los resultados en la página
  if (juegosFiltrados.length > 0) {
    contenedorResultados.innerHTML = "";
    juegosFiltrados.forEach(function(juego) {
      const resultado = document.createElement("p");
      resultado.textContent = `${juego.titulo} - ${juego.plataforma}`;
      contenedorResultados.appendChild(resultado);
    });
  } else {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = "No se encontraron juegos que coincidan con la búsqueda.";
    contenedorResultados.innerHTML = "";
    contenedorResultados.appendChild(mensajeError);
  }
});