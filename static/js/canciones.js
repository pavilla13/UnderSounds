// canciones.js

const canciones = [
  { name: "Bohemian Rhapsody", album: "A Night at the Opera", artist: "Queen", genre: "Rock"},
  { name: "Blinding Lights", album: "After Hours", artist: "The Weeknd", genre: "Pop" },
  { name: "Animals", album: "Animals", artist: "Pink Floyd", genre: "Rock" },
  { name: "Take Five", album: "Time Out", artist: "Dave Brubeck", genre: "Jazz" },
  { name: "Viva La Vida", album: "Viva La Vida or Death and All His Friends", artist: "Coldplay", genre: "Rock" },
  { name: "Levitating", album: "Future Nostalgia", artist: "Dua Lipa", genre: "Pop" },
  { name: "Tusa", album: "KG0516", artist: "Karol G", genre: "Reggaetón" },
  { name: "Titanium", album: "Nothing but the Beat", artist: "David Guetta ft. Sia", genre: "Electrónica" },
  { name: "Everlong", album: "The Colour and the Shape", artist: "Foo Fighters", genre: "Rock" },
  { name: "Positions", album: "Positions", artist: "Ariana Grande", genre: "Pop" },
  { name: "Mi Gente", album: "Vibras", artist: "J Balvin & Willy William", genre: "Reggaetón" },
  { name: "One Kiss", album: "Single", artist: "Calvin Harris & Dua Lipa", genre: "Electrónica" },
  { name: "Do I Wanna Know?", album: "AM", artist: "Arctic Monkeys", genre: "Rock" },
  { name: "As It Was", album: "Harry's House", artist: "Harry Styles", genre: "Pop" },
  { name: "Todo de Ti", album: "Vice Versa", artist: "Rauw Alejandro", genre: "Reggaetón" },
  { name: "Friends", album: "Joytime II", artist: "Marshmello & Anne-Marie", genre: "Electrónica" },
  { name: "Under Pressure", album: "Hot Space", artist: "Queen & David Bowie", genre: "Rock" },
  { name: "Save Your Tears", album: "After Hours", artist: "The Weeknd", genre: "Pop" },
  { name: "La Canción", album: "Oasis", artist: "J Balvin & Bad Bunny", genre: "Reggaetón" },
  { name: "Don't You Worry Child", album: "Until Now", artist: "Swedish House Mafia", genre: "Electrónica" },
  { name: "The Pretender", album: "Echoes, Silence, Patience & Grace", artist: "Foo Fighters", genre: "Rock" },
  { name: "Break My Heart", album: "Future Nostalgia", artist: "Dua Lipa", genre: "Pop" },
  { name: "Bichota", album: "KG0516", artist: "Karol G", genre: "Reggaetón" },
  { name: "The Business", album: "Drive", artist: "Tiësto", genre: "Electrónica" }
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
  const songId = Number(urlParams.get("id")); // Convertimos a número

  if (!isNaN(songId) && songId > 0) {
    const song = canciones.find(s => s.id === songId);
    
    if (song) {
      // Elementos del DOM donde insertaremos la información
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
      mostrarMensajeError("Canción no encontrada.");
    }
  } else {
    mostrarMensajeError("ID de canción inválido.");
  }
});

/**
 * Función para mostrar un mensaje de error en la página de detalles.
 */
function mostrarMensajeError(mensaje) {
  const content = document.getElementById("song-content");
  if (content) {
    content.innerHTML = `<p>${mensaje}</p>`;
  }
}