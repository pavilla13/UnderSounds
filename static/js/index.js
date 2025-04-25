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
      return (item.image || item.cover);
  }

  function getTitle(item){
      return (item.title || item.name || item.nombreGenero);
  }

  // Renderiza cada sección genérica
  function render(items, containerSelector, urlPrefix) {
    const row = document.querySelector(containerSelector + " .row");
    row.innerHTML = ""; // Limpiar contenido anterior
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

  // --- Sugerencias dinámicas ---
  render(sample(canciones),   ".music-section",   "cancion");
  render(sample(albumes),     ".album-section",   "album");
  render(sample(generos),     ".genres-section",  "generos_especifico");

  // --- Best Of's dinámicos con valoración 5 ---
  const bestSongs  = sample(canciones.filter(item => item.valoracion === 5));
  const bestAlbumes= sample(albumes.filter(item => item.valoracion === 5));
  const bestGeneros= sample(generos.filter(item => item.valoracion === 5));

  render(bestSongs,   "#bestofs .bestofs-songs", "cancion");
  render(bestAlbumes, "#bestofs .album-section", "album");
  render(bestGeneros, "#bestofs .genres-section", "generos_especifico");
});
