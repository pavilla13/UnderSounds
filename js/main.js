document.addEventListener('DOMContentLoaded', function() {
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
  // Lógica de pestañas (si existen)
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
  // Funcionalidad para el formulario de Registro (si existe)
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

  // ---------------------------
  // Funcionalidad para el formulario de Login (si existe)
  // ---------------------------
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    // Validación en tiempo real de la contraseña para login
    const loginPassword = document.getElementById('password');
    const loginPasswordError = document.getElementById('passwordError');
    if (loginPassword) {
      loginPassword.addEventListener('input', function() {
        if (this.value.length < 8) {
          loginPasswordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        } else {
          loginPasswordError.textContent = "";
        }
      });
    }
    // Evento submit para el formulario de login
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const password = document.getElementById('password').value;
      if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
      }
      // Si la validación es correcta, redirigir a la página principal
      window.location.href = "index.html";
    });
  }
});
