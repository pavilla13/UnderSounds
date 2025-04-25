document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("data-sugerencias").dataset;
    const canciones = JSON.parse(data.canciones);
    const albumes   = JSON.parse(data.albumes);
    const generos   = JSON.parse(data.generos);
  
    // Función para barajar y quedarnos con 4 elementos
    function sample(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, 4);
    }
    
    function getImage(item){
        return (item.image || item.cover );
    }

    function getTitle(item){
        return (item.title || item.name || item.nombreGenero);
    }

    // Renderiza cada sección
    function render(items, containerSelector, urlPrefix) {
      const row = document.querySelector(containerSelector + " .row");
      row.innerHTML = ""; // Limpiar contenido estático
      items.forEach(item => {
        const a = document.createElement("a");
        a.href = `/${urlPrefix}?id=${item.id}`;
        a.className = "card";
        a.innerHTML = `
          <img src="${getImage(item)}" alt="${getTitle(item)}" class="card-img">
          <div class="card-caption">${getTitle(item)}</div>
        `;
        row.appendChild(a);
      });
    }
  
    // Tomar cuatro al azar y pintar
    render(sample(canciones), ".music-section",   "cancion");
    render(sample(albumes),   ".album-section",   "album");
    render(sample(generos),   ".genres-section",  "generos_especifico");
  });
  