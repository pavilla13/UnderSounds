// artistas.js

const artistas = [
  {
    id: 1,
    name: "Queen",
    genre: "Rock",
    image: "assets/images/queen.jpeg",
    description: "Queen es una banda de rock británica, famosa por su estilo único y la voz de Freddie Mercury.",
    url: "artista.html?id=1"
  },
  {
    id: 2,
    name: "The Weeknd",
    genre: "Pop",
    image: "assets/images/weeknd.jpeg",
    description: "The Weeknd es un cantante canadiense conocido por su estilo de R&B y pop experimental.",
    url: "artista.html?id=2"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------
  // 1) Llenar el LISTADO de artistas (artistas.html)
  // ----------------------
  const artistsContainer = document.querySelector('.artists-list');
  if (artistsContainer) {
    artistsContainer.innerHTML = "";
    artistas.forEach((artist) => {
      const card = document.createElement("a");
      card.href = artist.url;
      card.classList.add("card");

      // Imagen del artista
      const img = document.createElement("img");
      img.src = artist.image;
      img.alt = artist.name;
      img.classList.add("card-img");

      // Pie de foto con el nombre del artista
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = artist.name;

      card.appendChild(img);
      card.appendChild(caption);
      artistsContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de un artista (artista.html)
  // ----------------------
  const urlParams = new URLSearchParams(window.location.search);
  const artistId = urlParams.get("id");
  if (artistId) {
    const artist = artistas.find(a => a.id === parseInt(artistId));
    if (artist) {
      const nameEl = document.getElementById("artist-name");
      const genreEl = document.getElementById("artist-genre");
      const descriptionEl = document.getElementById("artist-description");
      const imageEl = document.getElementById("artist-image");

      if (nameEl) nameEl.textContent = artist.name;
      if (genreEl) genreEl.textContent = artist.genre;
      if (descriptionEl) descriptionEl.textContent = artist.description;
      if (imageEl) {
        imageEl.src = artist.image;
        imageEl.alt = artist.name;
      }
    } else {
      const content = document.getElementById("artist-content");
      if (content) {
        content.innerHTML = "<p>Artista no encontrado.</p>";
      }
    }
  }
});
