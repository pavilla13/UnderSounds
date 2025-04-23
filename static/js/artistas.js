// artistas.js


const holder = document.getElementById("data-artistas");
let artistas = [];
if (holder) {
  artistas = JSON.parse(holder.dataset.artistas);
}

console.log(artistas);

document.addEventListener("DOMContentLoaded", () => {
  // 1) Llenar el LISTADO de artistas (artistas.html)
  const artistsContainer = document.querySelector('.artists-list');
  if (artistsContainer) {
    artistsContainer.innerHTML = "";
    artistas.forEach((artist) => {
      const card = document.createElement("a");
      card.href = artist.url;
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = artist.image;
      img.alt = artist.name;
      img.classList.add("card-img");

      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = artist.name;

      card.appendChild(img);
      card.appendChild(caption);
      artistsContainer.appendChild(card);
    });
  }

  // 2) Mostrar el DETALLE de un artista (artistas.html)
  const urlParams = new URLSearchParams(window.location.search);
  const artistId = urlParams.get("id");
  if (artistId) {
    const artist = artistas.find(a => a.id == artistId);
    if (artist) {
      // Actualizar información básica
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
