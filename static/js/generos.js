// generos.js  
  
const holder = document.getElementById("data-generos");
let generos = [];
let canciones = [];
if (holder) {
  generos = JSON.parse(holder.dataset.generos);
  canciones = JSON.parse(holder.dataset.canciones);
}

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------
  // 1) Llenar el LISTADO de géneros (generos.html)
  // ----------------------
  const genresContainer = document.querySelector('.genres-container');
  if (genresContainer) {
    genresContainer.innerHTML = "";
    generos.forEach((genre) => {
      const card = document.createElement("a");
      card.href = genre.url;
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = genre.image;
      img.alt = genre.name;
      img.classList.add("card-img");

      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = genre.name;

      card.appendChild(img);
      card.appendChild(caption);
      genresContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de un género (generos-especifico.html)
  // ----------------------
  const urlParams = new URLSearchParams(window.location.search);
  const genreId = urlParams.get("id");

  if (genreId) {
    const genre = generos.find(g => g.id === genreId);

    if (genre) {
      const nameEl = document.getElementById("genre-name");
      const imageEl = document.getElementById("genre-image");
      const descEl = document.getElementById("genre-description");

      if (nameEl) nameEl.textContent = genre.name;
      if (imageEl) {
        imageEl.src = genre.image;
        imageEl.alt = genre.name;
      }
      if (descEl) descEl.textContent = genre.description;

      cargarCancionesPorGenero(genre.name);
    } else {
      const content = document.getElementById("genre-content");
      if (content) {
        content.innerHTML = "<p>Género no encontrado.</p>";
      }
    }
  }
});

// ----------------------
// 3) Cargar canciones del género con estilo de lista (igual que albumes.js)
// ----------------------
function cargarCancionesPorGenero(genreName) {
  const songsContainer = document.getElementById("songs-container");
  if (!songsContainer) return;
  songsContainer.innerHTML = "";

  const songsByGenre = canciones.filter(
    song => song.genre.toLowerCase() === genreName.toLowerCase()
  );
  if (songsByGenre.length === 0) {
    songsContainer.innerHTML = "<p>No hay canciones disponibles para este género.</p>";
    return;
  }

  // Creamos la UL centrada
  const trackList = document.createElement("ul");
  trackList.classList.add("track-list");

  songsByGenre.forEach((song, index) => {
    const li = document.createElement("li");
    li.className = "track";

    const a = document.createElement("a");
    a.href = `/cancion?id=${song.id}`;
    a.className = "track-link";

    // Imagen de la canción
    const img = document.createElement("img");
    img.src = song.cover;                 // la URL real de la portada
    img.alt = song.title;
    img.className = "track-img";

    // Título
    const titleSpan = document.createElement("span");
    titleSpan.className = "track-title";
    titleSpan.textContent = song.title;

    // Duración
    const durationSpan = document.createElement("span");
    durationSpan.className = "track-duration";
    durationSpan.textContent = song.duration;

    a.append(img, titleSpan, durationSpan);
    li.appendChild(a);
    trackList.appendChild(li);
  });

  songsContainer.appendChild(trackList);
}


