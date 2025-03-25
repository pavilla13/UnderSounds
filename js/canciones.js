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
  },
  {
    id: 5,
    name: "Viva La Vida",
    album: "Viva La Vida or Death and All His Friends",
    artist: "Coldplay",
    genre: "Rock",
    image: "assets/images/viva.jpeg",
    url: "cancion.html?id=5"
  },
  {
    id: 6,
    name: "Levitating",
    album: "Future Nostalgia",
    artist: "Dua Lipa",
    genre: "Pop",
    image: "assets/images/levitating.jpeg",
    url: "cancion.html?id=6"
  },
  {
    id: 7,
    name: "Tusa",
    album: "KG0516",
    artist: "Karol G",
    genre: "Reggaetón",
    image: "assets/images/tusa.jpeg",
    url: "cancion.html?id=7"
  },
  {
    id: 8,
    name: "Titanium",
    album: "Nothing but the Beat",
    artist: "David Guetta ft. Sia",
    genre: "Electrónica",
    image: "assets/images/titanium.jpeg",
    url: "cancion.html?id=8"
  },
  {
    id: 9,
    name: "Everlong",
    album: "The Colour and the Shape",
    artist: "Foo Fighters",
    genre: "Rock",
    image: "assets/images/everlong.jpeg",
    url: "cancion.html?id=9"
  },
  {
    id: 10,
    name: "Positions",
    album: "Positions",
    artist: "Ariana Grande",
    genre: "Pop",
    image: "assets/images/positions.jpeg",
    url: "cancion.html?id=10"
  },
  {
    id: 11,
    name: "Mi Gente",
    album: "Vibras",
    artist: "J Balvin & Willy William",
    genre: "Reggaetón",
    image: "assets/images/migente.jpeg",
    url: "cancion.html?id=11"
  },
  {
    id: 12,
    name: "One Kiss",
    album: "Single",
    artist: "Calvin Harris & Dua Lipa",
    genre: "Electrónica",
    image: "assets/images/onekiss.jpeg",
    url: "cancion.html?id=12"
  },
  {
    id: 13,
    name: "Do I Wanna Know?",
    album: "AM",
    artist: "Arctic Monkeys",
    genre: "Rock",
    image: "assets/images/dowanna.jpeg",
    url: "cancion.html?id=13"
  },
  {
    id: 14,
    name: "As It Was",
    album: "Harry's House",
    artist: "Harry Styles",
    genre: "Pop",
    image: "assets/images/asitwas.jpeg",
    url: "cancion.html?id=14"
  },
  {
    id: 15,
    name: "Todo de Ti",
    album: "Vice Versa",
    artist: "Rauw Alejandro",
    genre: "Reggaetón",
    image: "assets/images/tododeti.jpeg",
    url: "cancion.html?id=15"
  },
  {
    id: 16,
    name: "Friends",
    album: "Joytime II",
    artist: "Marshmello & Anne-Marie",
    genre: "Electrónica",
    image: "assets/images/friends.jpeg",
    url: "cancion.html?id=16"
  },
  {
    id: 17,
    name: "Under Pressure",
    album: "Hot Space",
    artist: "Queen & David Bowie",
    genre: "Rock",
    image: "assets/images/underpressure.jpeg",
    url: "cancion.html?id=17"
  },
  {
    id: 18,
    name: "Save Your Tears",
    album: "After Hours",
    artist: "The Weeknd",
    genre: "Pop",
    image: "assets/images/saveyourtears.jpeg",
    url: "cancion.html?id=18"
  },
  {
    id: 19,
    name: "La Canción",
    album: "Oasis",
    artist: "J Balvin & Bad Bunny",
    genre: "Reggaetón",
    image: "assets/images/lacancion.jpeg",
    url: "cancion.html?id=19"
  },
  {
    id: 20,
    name: "Don't You Worry Child",
    album: "Until Now",
    artist: "Swedish House Mafia",
    genre: "Electrónica",
    image: "assets/images/worrychild.jpeg",
    url: "cancion.html?id=20"
  },
  {
    id: 21,
    name: "The Pretender",
    album: "Echoes, Silence, Patience & Grace",
    artist: "Foo Fighters",
    genre: "Rock",
    image: "assets/images/pretender.jpeg",
    url: "cancion.html?id=21"
  },
  {
    id: 22,
    name: "Break My Heart",
    album: "Future Nostalgia",
    artist: "Dua Lipa",
    genre: "Pop",
    image: "assets/images/breakmyheart.jpeg",
    url: "cancion.html?id=22"
  },
  {
    id: 23,
    name: "Bichota",
    album: "KG0516",
    artist: "Karol G",
    genre: "Reggaetón",
    image: "assets/images/bichota.jpeg",
    url: "cancion.html?id=23"
  },
  {
    id: 24,
    name: "The Business",
    album: "Drive",
    artist: "Tiësto",
    genre: "Electrónica",
    image: "assets/images/business.jpeg",
    url: "cancion.html?id=24"
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