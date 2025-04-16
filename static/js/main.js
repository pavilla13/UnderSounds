document.addEventListener('DOMContentLoaded', function() {
  // Obtener el contenedor del header y el archivo a cargar (por defecto header.html)
  const headerPlaceholder = document.getElementById('header-placeholder');
  const headerFile = headerPlaceholder.getAttribute('data-header') || 'header.html';
  // Verificar si el contenedor existe
  if (!headerPlaceholder) {
    console.error('El contenedor del header no existe en el DOM.');
    return;
  }

  // Cargar la cabecera de forma asíncrona
  fetch(headerFile)
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;

      // ---------------------------
      // Lógica de la barra de búsqueda
      // ---------------------------
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.addEventListener('focus', function() {
          this.placeholder = '';
        });
        searchInput.addEventListener('blur', function() {
          if (this.value.trim() === '') {
            this.placeholder = 'Buscar artista, álbum,...';
          }
        });
      }

      // ---------------------------
      // Lógica de pestañas
      // ---------------------------
      const tabs = document.querySelectorAll('.tab');
      const contents = document.querySelectorAll('.tab-content');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Quitar la clase 'active' a todas las pestañas
          tabs.forEach(t => t.classList.remove('active'));
          // Agregar 'active' a la pestaña clicada
          tab.classList.add('active');
          // Ocultar todo el contenido
          contents.forEach(c => c.classList.remove('active'));
          // Mostrar la sección que coincide con data-tab
          const targetId = tab.getAttribute('data-tab');
          const targetContent = document.getElementById(targetId);
          if (targetContent) {
            targetContent.classList.add('active');
          }
        });
      });

      // ---------------------------
      // Funcionalidad para el formulario de Registro
      // ---------------------------
      const registerForm = document.getElementById('registerForm');
      if (registerForm) {
        // Validación en tiempo real de la contraseña para registro
        const registerPassword = document.getElementById('password');
        const registerPasswordError = document.getElementById('passwordError');
        if (registerPassword) {
          registerPassword.addEventListener('input', function() {
            if (this.value.length < 8) {
              registerPasswordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
            } else {
              registerPasswordError.textContent = "";
            }
          });
        }
        // Evento submit para el formulario de registro
        registerForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const password = document.getElementById('password').value;
          const password2 = document.getElementById('password2').value;
          if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
          }
          if (password !== password2) {
            alert("Las contraseñas no coinciden.");
            return;
          }
          // Si las validaciones son correctas, redirigir a la pantalla de inicio de sesión
          window.location.href = "login.html";
        });
      }
    })
    .catch(error => console.error('Error al cargar la cabecera:', error));
});
