// artistas.js

const artistas = [
  {
    id: 1,
    name: "Queen",
    genre: "Rock",
    image: "assets/images/queen.jpeg",
    description: "Queen es una banda de rock británica, famosa por su estilo único y la voz de Freddie Mercury.",
    url: "artistas.html?id=1"
  },
  {
    id: 2,
    name: "The Weeknd",
    genre: "Pop",
    image: "assets/images/weeknd.jpeg",
    description: "The Weeknd es un cantante canadiense conocido por su estilo de R&B y pop experimental.",
    url: "artistas.html?id=2"
  },
  {
    id: 3,
    name: "Bad Bunny",
    genre: "Reggaetón",
    image: "assets/images/badbunny.jpeg",
    description: "Bad Bunny es un artistas puertorriqueño que ha revolucionado el reggaetón y la música urbana.",
    url: "artistas.html?id=3"
  },
  {
    id: 4,
    name: "David Guetta",
    genre: "Electrónica",
    image: "assets/images/davidguetta.jpeg",
    description: "David Guetta es un DJ y productor francés considerado una de las figuras más influyentes de la música electrónica.",
    url: "artistas.html?id=4"
  },
  {
    id: 5,
    name: "Coldplay",
    genre: "Rock",
    image: "assets/images/coldplay.jpeg",
    description: "Coldplay es una banda británica de rock alternativo conocida por su sonido melódico y emocional.",
    url: "artistas.html?id=5"
  },
  {
    id: 6,
    name: "Dua Lipa",
    genre: "Pop",
    image: "assets/images/dualipa.jpeg",
    description: "Dua Lipa es una cantante británica de pop que ha ganado reconocimiento mundial por su estilo y voz.",
    url: "artistas.html?id=6"
  },
  {
    id: 7,
    name: "J Balvin",
    genre: "Reggaetón",
    image: "assets/images/jbalvin.jpeg",
    description: "J Balvin es uno de los artistas más representativos del reggaetón a nivel global.",
    url: "artistas.html?id=7"
  },
  {
    id: 8,
    name: "Calvin Harris",
    genre: "Electrónica",
    image: "assets/images/calvinharris.jpeg",
    description: "Calvin Harris es un DJ y productor escocés reconocido por sus colaboraciones en la música electrónica y pop.",
    url: "artistas.html?id=8"
  },
  {
    id: 9,
    name: "Foo Fighters",
    genre: "Rock",
    image: "assets/images/foofighters.jpeg",
    description: "Foo Fighters es una banda de rock estadounidense fundada por Dave Grohl, exbatería de Nirvana.",
    url: "artistas.html?id=9"
  },
  {
    id: 10,
    name: "Ariana Grande",
    genre: "Pop",
    image: "assets/images/arianagrande.jpeg",
    description: "Ariana Grande es una cantante y actriz estadounidense conocida por su poderosa voz y estilo pop.",
    url: "artistas.html?id=10"
  },
  {
    id: 11,
    name: "Karol G",
    genre: "Reggaetón",
    image: "assets/images/karolg.jpeg",
    description: "Karol G es una cantante colombiana destacada en la música urbana y reggaetón.",
    url: "artistas.html?id=11"
  },
  {
    id: 12,
    name: "Tiësto",
    genre: "Electrónica",
    image: "assets/images/tiesto.jpeg",
    description: "Tiësto es un DJ neerlandés considerado una leyenda en la música electrónica y trance.",
    url: "artistas.html?id=12"
  },
  {
    id: 13,
    name: "Arctic Monkeys",
    genre: "Rock",
    image: "assets/images/arcticmonkeys.jpeg",
    description: "Arctic Monkeys es una banda de rock alternativo británica con un estilo único y letras ingeniosas.",
    url: "artistas.html?id=13"
  },
  {
    id: 14,
    name: "Harry Styles",
    genre: "Pop",
    image: "assets/images/harrystyles.jpeg",
    description: "Harry Styles es un cantante británico que ha desarrollado una exitosa carrera como solista en el pop.",
    url: "artistas.html?id=14"
  },
  {
    id: 15,
    name: "Rauw Alejandro",
    genre: "Reggaetón",
    image: "assets/images/rauwalejandro.jpeg",
    description: "Rauw Alejandro es una estrella emergente del reggaetón, conocido por su versatilidad musical y estilo innovador.",
    url: "artistas.html?id=15"
  },
  {
    id: 16,
    name: "Marshmello",
    genre: "Electrónica",
    image: "assets/images/marshmello.jpeg",
    description: "Marshmello es un DJ y productor estadounidense famoso por su estilo EDM y su icónica máscara.",
    url: "artistas.html?id=16"
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

      // Imagen del artistas
      const img = document.createElement("img");
      img.src = artist.image;
      img.alt = artist.name;
      img.classList.add("card-img");

      // Pie de foto con el nombre del artistas
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = artist.name;

      card.appendChild(img);
      card.appendChild(caption);
      artistsContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de un artistas (artistas.html)
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
        content.innerHTML = "<p>artistas no encontrado.</p>";
      }
    }
  }
});
