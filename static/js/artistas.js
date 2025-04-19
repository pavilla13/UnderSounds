// artistas.js

//REVISAR BIEN ID DE ALBUM, ARTISTA Y SELLO (PARA PODER HACER LISTAS)
const artistas = [
  {
    id: 1,
    name: "Queen",
    genre: "Rock",
    description: "Queen es una banda de rock británica, famosa por su estilo único y la voz de Freddie Mercury.",
    image: "static/images/queen.jpeg",
    url: "/artistas?id=1",
    albumIds: [1, 2, 3, 4],
    selloId: 1
  },
  {
    id: 2,
    name: "The Weeknd",
    genre: "Pop",
    description: "The Weeknd es un cantante canadiense conocido por su estilo de R&B y pop experimental.",
    image: "static/images/the-weeknd.jpg",
    url: "/artistas?id=2",
    albumIds: [5, 6, 7],
    selloId: 2
  },
  {
    id: 3,
    name: "Bad Bunny",
    genre: "Reggaetón",
    description: "Bad Bunny es un artista puertorriqueño que ha revolucionado el reggaetón y la música urbana.",
    image: "static/images/bad-bunny.jpg",
    url: "/artistas?id=3",
    albumIds: [8, 9, 10],
    selloId: 1
  },
  {
    id: 4,
    name: "David Guetta",
    genre: "Electrónica",
    description: "David Guetta es un DJ y productor francés considerado una de las figuras más influyentes de la música electrónica.",
    image: "static/images/david-guetta.jpeg",
    url: "/artistas?id=4",
    albumIds: [11, 12, 13],
    selloId: 3
  },
  {
    id: 5,
    name: "Coldplay",
    genre: "Rock",
    description: "Coldplay es una banda británica de rock alternativo conocida por su sonido melódico y emocional.",
    image: "static/images/coldplay.jpeg",
    url: "/artistas?id=5",
    albumIds: [14, 15, 16],
    selloId: 4
  },
  {
    id: 6,
    name: "Dua Lipa",
    genre: "Pop",
    description: "Dua Lipa es una cantante británica de pop que ha ganado reconocimiento mundial por su estilo y voz.",
    image: "static/images/dua-lipa.jpg",
    url: "/artistas?id=6",
    albumIds: [17, 18, 19],
    selloId: 2
  },
  {
    id: 7,
    name: "J Balvin",
    genre: "Reggaetón",
    description: "J Balvin es uno de los artistas más representativos del reggaetón a nivel global.",
    image: "static/images/j-balvin.jpeg",
    url: "/artistas?id=7",
    albumIds: [20, 21, 22],
    selloId: 1
  },
  {
    id: 8,
    name: "Calvin Harris",
    genre: "Electrónica",
    description: "Calvin Harris es un DJ y productor escocés reconocido por sus colaboraciones en la música electrónica y pop.",
    image: "static/images/calvin-harris.jpeg",
    url: "/artistas?id=8",
    albumIds: [23, 24, 25],
    selloId: 3
  },
  {
    id: 9,
    name: "Foo Fighters",
    genre: "Rock",
    description: "Foo Fighters es una banda de rock estadounidense fundada por Dave Grohl, exbatería de Nirvana.",
    image: "static/images/foo-fighters.jpg",
    url: "/artistas?id=9",
    albumIds: [26, 27, 28],
    selloId: 4
  },
  {
    id: 10,
    name: "Ariana Grande",
    genre: "Pop",
    description: "Ariana Grande es una cantante y actriz estadounidense conocida por su poderosa voz y estilo pop.",
    image: "static/images/ariana-grande.jpeg",
    url: "/artistas?id=10",
    albumIds: [29, 30, 31],
    selloId: 2
  },
  {
    id: 11,
    name: "Karol G",
    genre: "Reggaetón",
    description: "Karol G es una cantante colombiana destacada en la música urbana y reggaetón.",
    image: "static/images/karol-g.jpeg",
    url: "/artistas?id=11",
    albumIds: [32, 33, 34],
    selloId: 1
  },
  {
    id: 12,
    name: "Tiësto",
    genre: "Electrónica",
    description: "Tiësto es un DJ neerlandés considerado una leyenda en la música electrónica y trance.",
    image: "static/images/tiesto.jpg",
    url: "/artistas?id=12",
    albumIds: [35, 36, 37],
    selloId: 3
  },
  {
    id: 13,
    name: "Arctic Monkeys",
    genre: "Rock",
    description: "Arctic Monkeys es una banda de rock alternativo británica con un estilo único y letras ingeniosas.",
    image: "static/images/arctic-monkeys.jpeg",
    url: "/artistas?id=13",
    albumIds: [38, 39, 40],
    selloId: 4
  },
  {
    id: 14,
    name: "Harry Styles",
    genre: "Pop",
    description: "Harry Styles es un cantante británico que ha desarrollado una exitosa carrera como solista en el pop.",
    image: "static/images/harry-styles.webp",
    url: "/artistas?id=14",
    albumIds: [41, 42, 43],
    selloId: 2
  },
  {
    id: 15,
    name: "Rauw Alejandro",
    genre: "Reggaetón",
    description: "Rauw Alejandro es una estrella emergente del reggaetón, conocido por su versatilidad musical y estilo innovador.",
    image: "static/images/rauw-alejandro.jpeg",
    url: "/artistas?id=15",
    albumIds: [44, 45, 46],
    selloId: 1
  },
  {
    id: 16,
    name: "Marshmello",
    genre: "Electrónica",
    description: "Marshmello es un DJ y productor estadounidense famoso por su estilo EDM y su icónica máscara.",
    image: "static/images/marshmello.jpg",
    url: "/artistas?id=16",
    albumIds: [47, 48, 49],
    selloId: 3
  }
];

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
    } else {
      const content = document.getElementById("artist-content");
      if (content) {
        content.innerHTML = "<p>Artista no encontrado.</p>";
      }
    }
  }
});
