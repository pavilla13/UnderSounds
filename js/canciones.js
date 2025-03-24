// canciones.js

const canciones = [
  {
    id: 1,
    name: "Bohemian Rhapsody",
    album: "A Night at the Opera",
    artist: "Queen",
    genre: "Rock",
    image: "assets/images/bohemian.jpeg",
    url: "cancion.html?id=1"
  },
  {
    id: 2,
    name: "Blinding Lights",
    album: "After Hours",
    artist: "The Weeknd",
    genre: "Pop",
    image: "assets/images/lights.jpeg",
    url: "cancion.html?id=2"
  },
  {
    id: 3,
    name: "Animals",
    album: "Animals",
    artist: "Pink Floyd",
    genre: "Rock",
    image: "assets/images/animals.jpeg",
    url: "cancion.html?id=3"
  },
  {
    id: 4,
    name: "Take Five",
    album: "Time Out",
    artist: "Dave Brubeck",
    genre: "Jazz",
    image: "assets/images/five.jpeg",
    url: "cancion.html?id=4"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------
  // 1) Llenar el LISTADO de canciones (canciones.html)
  // ----------------------
  const songsContainer = document.querySelector('.songs-list');
  if (songsContainer) {
    songsContainer.innerHTML = "";
    canciones.forEach((song) => {
      const card = document.createElement("a");
      card.href = song.url;
      card.classList.add("card");

      // Imagen de la canción
      const img = document.createElement("img");
      img.src = song.image;
      img.alt = song.name;
      img.classList.add("card-img");

      // Pie de foto con nombre de la canción
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = song.name;

      card.appendChild(img);
      card.appendChild(caption);
      songsContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de una canción (cancion.html)
  // ----------------------
  const urlParams = new URLSearchParams(window.location.search);
  const songId = urlParams.get("id");
  if (songId) {
    const song = canciones.find(s => s.id === parseInt(songId));
    if (song) {
      const nameEl = document.getElementById("song-name");
      const albumEl = document.getElementById("song-album");
      const artistEl = document.getElementById("song-artist");
      const imageEl = document.getElementById("song-image");

      if (nameEl) nameEl.textContent = song.name;
      if (albumEl) albumEl.textContent = song.album;
      if (artistEl) artistEl.textContent = song.artist;
      if (imageEl) {
        imageEl.src = song.image;
        imageEl.alt = song.name;
      }
    } else {
      const content = document.getElementById("song-content");
      if (content) {
        content.innerHTML = "<p>Canción no encontrada.</p>";
      }
    }
  }
});
