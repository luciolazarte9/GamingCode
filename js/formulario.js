function publicarComentario(event) {
    event.preventDefault();
  
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const comentario = document.querySelector("#comentario").value;
  
    const comentarioElement = document.createElement("div");
    comentarioElement.innerHTML = `<strong>${nombreUsuario}</strong>: ${comentario}`;
    document.querySelector("#comentarios").appendChild(comentarioElement);
  
    document.querySelector("#nombre-usuario").value = "";
    document.querySelector("#comentario").value = "";
  }

  const formulario = document.querySelector("#form-comentario");
  formulario.addEventListener("submit", publicarComentario);