      function mostrarPublicidad() {
        setTimeout(function() {
          var publicidadModal = new bootstrap.Modal(document.getElementById('publicidadModal'));
          publicidadModal.show();
        }, 4000);
      }
      
      window.onload = function() {
        mostrarPublicidad();
      };