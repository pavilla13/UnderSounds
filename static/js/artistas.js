// artistas.js


const holder = document.getElementById("data-artistas");
let artistas = [];
let canciones = [];
let albumes = [];
if (holder) {
  artistas = JSON.parse(holder.dataset.artistas);
  canciones = JSON.parse(holder.dataset.canciones);
  albumes = JSON.parse(holder.dataset.albumes);
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

      cargarCancionesPorArtista(artist.name);
      cargarAlbumesPorArtista(artist.name);

    } else {
      const content = document.getElementById("artist-content");
      if (content) {
        content.innerHTML = "<p>Artista no encontrado.</p>";
      }
    }
  }
});





function cargarCancionesPorArtista(artistName) {
  const songsContainer = document.getElementById("songs-container");
  if (!songsContainer) return;
  songsContainer.innerHTML = "";

  // Filtrar canciones por el nombre del artista
  const songsByArtist = canciones.filter(
    song => song.artist.toLowerCase() === artistName.toLowerCase()
  );

  if (songsByArtist.length === 0) {
    songsContainer.innerHTML = "<p>Este artista no tiene canciones disponibles.</p>";
    return;
  }

  // Crear la lista UL
  const trackList = document.createElement("ul");
  trackList.classList.add("track-list");

  songsByArtist.forEach((song) => {
    const li = document.createElement("li");
    li.className = "track";

    const a = document.createElement("a");
    a.href = `/cancion?id=${song.id}`;
    a.className = "track-link";

    const img = document.createElement("img");
    img.src = song.cover;
    img.alt = song.title;
    img.className = "track-img";

    const titleSpan = document.createElement("span");
    titleSpan.className = "track-title";
    titleSpan.textContent = song.title;

    const durationSpan = document.createElement("span");
    durationSpan.className = "track-duration";
    durationSpan.textContent = song.duration;

    a.append(img, titleSpan, durationSpan);
    li.appendChild(a);
    trackList.appendChild(li);
  });

  songsContainer.appendChild(trackList);
}

function cargarAlbumesPorArtista(artistName) {
  const albumsContainer = document.getElementById("albums-container");
  if (!albumsContainer) return;
  albumsContainer.innerHTML = "";

  // Filtrar canciones por el nombre del artista
  const albumsByArtist = albumes.filter(
    album => album.artist.toLowerCase() === artistName.toLowerCase()
  );

  if (albumsByArtist.length === 0) {
    albumsContainer.innerHTML = "<p>Este artista no tiene albumes disponibles.</p>";
    return;
  }

  // Crear la lista UL
  const albumlist = document.createElement("ul");
  albumlist.classList.add("track-list");

  albumsByArtist.forEach((album) => {
    const li = document.createElement("li");
    li.className = "track";

    const a = document.createElement("a");
    a.href = `/album?id=${album.id}`;
    a.className = "track-link";

    const img = document.createElement("img");
    img.src = album.image;
    img.alt = album.name;
    img.className = "track-img";

    const nameSpan = document.createElement("span");
    nameSpan.className = "track-title";
    nameSpan.textContent = album.name;

    const genreSpan = document.createElement("span");
    genreSpan.className = "track-duration";
    genreSpan.textContent = album.genre;

    a.append(img, nameSpan, genreSpan);
    li.appendChild(a);
    albumlist.appendChild(li);
  });

  albumsContainer.appendChild(albumlist);
}
