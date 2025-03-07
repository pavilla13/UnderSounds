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
    // Lógica de pestañas
    // ---------------------------
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // 1. Quitar la clase 'active' a todas las pestañas
        tabs.forEach(t => t.classList.remove('active'));
        // 2. Agregar 'active' a la pestaña clicada
        tab.classList.add('active');
  
        // 3. Ocultar todo el contenido
        contents.forEach(c => c.classList.remove('active'));
        // 4. Mostrar la sección que coincide con data-tab
        const targetId = tab.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });
  