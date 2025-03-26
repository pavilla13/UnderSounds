// artistas.js

//REVISAR BIEN ID DE ALBUM, ARTISTA Y SELLO (PARA PODER HACER LISTAS)
const artistas = [
  {
    id: 1,
    name: "Queen",
    genre: "Rock",
    description: "Queen es una banda de rock británica, famosa por su estilo único y la voz de Freddie Mercury.",
    image: "assets/images/queen.jpg",
    url: "artistas.html?id=1",
    albumIds: [1, 2, 3, 4],
    selloId: 1
  },
  {
    id: 2,
    name: "The Weeknd",
    genre: "Pop",
    description: "The Weeknd es un cantante canadiense conocido por su estilo de R&B y pop experimental.",
    image: "assets/images/the-weeknd.jpg",
    url: "artistas.html?id=2",
    albumIds: [5, 6, 7],
    selloId: 2
  },
  {
    id: 3,
    name: "Bad Bunny",
    genre: "Reggaetón",
    description: "Bad Bunny es un artista puertorriqueño que ha revolucionado el reggaetón y la música urbana.",
    image: "assets/images/bad-bunny.jpg",
    url: "artistas.html?id=3",
    albumIds: [8, 9, 10],
    selloId: 1
  },
  {
    id: 4,
    name: "David Guetta",
    genre: "Electrónica",
    description: "David Guetta es un DJ y productor francés considerado una de las figuras más influyentes de la música electrónica.",
    image: "assets/images/david-guetta.jpg",
    url: "artistas.html?id=4",
    albumIds: [11, 12, 13],
    selloId: 3
  },
  {
    id: 5,
    name: "Coldplay",
    genre: "Rock",
    description: "Coldplay es una banda británica de rock alternativo conocida por su sonido melódico y emocional.",
    image: "assets/images/coldplay.jpg",
    url: "artistas.html?id=5",
    albumIds: [14, 15, 16],
    selloId: 4
  },
  {
    id: 6,
    name: "Dua Lipa",
    genre: "Pop",
    description: "Dua Lipa es una cantante británica de pop que ha ganado reconocimiento mundial por su estilo y voz.",
    image: "assets/images/dua-lipa.jpg",
    url: "artistas.html?id=6",
    albumIds: [17, 18, 19],
    selloId: 2
  },
  {
    id: 7,
    name: "J Balvin",
    genre: "Reggaetón",
    description: "J Balvin es uno de los artistas más representativos del reggaetón a nivel global.",
    image: "assets/images/j-balvin.jpg",
    url: "artistas.html?id=7",
    albumIds: [20, 21, 22],
    selloId: 1
  },
  {
    id: 8,
    name: "Calvin Harris",
    genre: "Electrónica",
    description: "Calvin Harris es un DJ y productor escocés reconocido por sus colaboraciones en la música electrónica y pop.",
    image: "assets/images/calvin-harris.jpg",
    url: "artistas.html?id=8",
    albumIds: [23, 24, 25],
    selloId: 3
  },
  {
    id: 9,
    name: "Foo Fighters",
    genre: "Rock",
    description: "Foo Fighters es una banda de rock estadounidense fundada por Dave Grohl, exbatería de Nirvana.",
    image: "assets/images/foo-fighters.jpg",
    url: "artistas.html?id=9",
    albumIds: [26, 27, 28],
    selloId: 4
  },
  {
    id: 10,
    name: "Ariana Grande",
    genre: "Pop",
    description: "Ariana Grande es una cantante y actriz estadounidense conocida por su poderosa voz y estilo pop.",
    image: "assets/images/ariana-grande.jpg",
    url: "artistas.html?id=10",
    albumIds: [29, 30, 31],
    selloId: 2
  },
  {
    id: 11,
    name: "Karol G",
    genre: "Reggaetón",
    description: "Karol G es una cantante colombiana destacada en la música urbana y reggaetón.",
    image: "assets/images/karol-g.jpg",
    url: "artistas.html?id=11",
    albumIds: [32, 33, 34],
    selloId: 1
  },
  {
    id: 12,
    name: "Tiësto",
    genre: "Electrónica",
    description: "Tiësto es un DJ neerlandés considerado una leyenda en la música electrónica y trance.",
    image: "assets/images/tiesto.jpg",
    url: "artistas.html?id=12",
    albumIds: [35, 36, 37],
    selloId: 3
  },
  {
    id: 13,
    name: "Arctic Monkeys",
    genre: "Rock",
    description: "Arctic Monkeys es una banda de rock alternativo británica con un estilo único y letras ingeniosas.",
    image: "assets/images/arctic-monkeys.jpg",
    url: "artistas.html?id=13",
    albumIds: [38, 39, 40],
    selloId: 4
  },
  {
    id: 14,
    name: "Harry Styles",
    genre: "Pop",
    description: "Harry Styles es un cantante británico que ha desarrollado una exitosa carrera como solista en el pop.",
    image: "assets/images/harry-styles.jpg",
    url: "artistas.html?id=14",
    albumIds: [41, 42, 43],
    selloId: 2
  },
  {
    id: 15,
    name: "Rauw Alejandro",
    genre: "Reggaetón",
    description: "Rauw Alejandro es una estrella emergente del reggaetón, conocido por su versatilidad musical y estilo innovador.",
    image: "assets/images/rauw-alejandro.jpg",
    url: "artistas.html?id=15",
    albumIds: [44, 45, 46],
    selloId: 1
  },
  {
    id: 16,
    name: "Marshmello",
    genre: "Electrónica",
    description: "Marshmello es un DJ y productor estadounidense famoso por su estilo EDM y su icónica máscara.",
    image: "assets/images/marshmello.jpg",
    url: "artistas.html?id=16",
    albumIds: [47, 48, 49],
    selloId: 3
  }
];

// El resto del código (event listeners y funciones) permanece igual...

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
    const artist = artistas.find(a => a.id === parseInt(artistId));
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

      // Cargar álbumes del artista
      loadArtistAlbums(artist.albumIds);
      
      // Cargar artistas del mismo sello
      loadLabelArtists(artist.selloId, artist.id);
    } else {
      const content = document.getElementById("artist-content");
      if (content) {
        content.innerHTML = "<p>Artista no encontrado.</p>";
      }
    }
  }
});

// Función para cargar álbumes del artista
function loadArtistAlbums(albumIds) {
  const albumsContainer = document.getElementById("artist-albums");
  if (!albumsContainer) return;

  albumsContainer.innerHTML = "";
  
  albumIds.forEach(albumId => {
    const album = albumes.find(a => a.id === albumId);
    if (album) {
      const card = document.createElement("a");
      card.href = `album.html?id=${album.id}`;
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = album.image;
      img.alt = album.name;
      img.classList.add("card-img");

      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = album.name;

      card.appendChild(img);
      card.appendChild(caption);
      albumsContainer.appendChild(card);
    }
  });
}

// Función para cargar artistas del mismo sello
function loadLabelArtists(selloId, currentArtistId) {
  const artistsContainer = document.getElementById("label-artists");
  if (!artistsContainer) return;

  artistsContainer.innerHTML = "";
  
  // Buscar artistas del mismo sello (excluyendo al actual)
  const labelArtists = artistas.filter(a => 
    a.selloId === selloId && a.id !== currentArtistId
  );

  labelArtists.forEach(artist => {
    const card = document.createElement("a");
    card.href = `artistas.html?id=${artist.id}`;
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
