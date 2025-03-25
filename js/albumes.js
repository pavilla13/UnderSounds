// albumes.js

// ----------------------
// Arreglo de álbumes
// ----------------------
const albumes = [
  {
    id: 1,
    name: "A Night at the Opera",
    artist: "Queen",
    genre: "Rock",
    image: "assets/images/anightattheopera.jpeg",
    description: "Lanzado en 1975, este álbum incluye temas icónicos como 'Bohemian Rhapsody'.",
    url: "album.html?id=1"
  },
  {
    id: 2,
    name: "After Hours",
    artist: "The Weeknd",
    genre: "Pop",
    image: "assets/images/afterhours.jpeg",
    description: "Publicado en 2020, consolidó a The Weeknd como un referente del pop y R&B contemporáneo.",
    url: "album.html?id=2"
  },
  {
    id: 3,
    name: "X 100pre",
    artist: "Bad Bunny",
    genre: "Reggaetón",
    image: "assets/images/x100pre.jpeg",
    description: "Álbum debut de Bad Bunny, lanzado en 2018, con el que redefinió el reggaetón moderno.",
    url: "album.html?id=3"
  },
  {
    id: 4,
    name: "Nothing But The Beat",
    artist: "David Guetta",
    genre: "Electrónica",
    image: "assets/images/nothingbutthebeat.jpeg",
    description: "Publicado en 2011, cuenta con colaboraciones de destacados artistas del pop y la electrónica.",
    url: "album.html?id=4"
  },
  {
    id: 5,
    name: "Parachutes",
    artist: "Coldplay",
    genre: "Rock",
    image: "assets/images/parachutes.jpeg",
    description: "Álbum debut de Coldplay (2000), reconocido por el éxito mundial 'Yellow'.",
    url: "album.html?id=5"
  },
  {
    id: 6,
    name: "Future Nostalgia",
    artist: "Dua Lipa",
    genre: "Pop",
    image: "assets/images/futurenostalgia.jpeg",
    description: "Lanzado en 2020, destaca el estilo dance-pop fresco que impulsó la fama de Dua Lipa.",
    url: "album.html?id=6"
  },
  {
    id: 7,
    name: "Vibras",
    artist: "J Balvin",
    genre: "Reggaetón",
    image: "assets/images/vibras.jpeg",
    description: "Estrenado en 2018, fusiona ritmos latinos con un sonido urbano moderno.",
    url: "album.html?id=7"
  },
  {
    id: 8,
    name: "18 Months",
    artist: "Calvin Harris",
    genre: "Electrónica",
    image: "assets/images/18months.jpeg",
    description: "Disco de 2012 que llevó a Calvin Harris al estrellato con colaboraciones pop y EDM.",
    url: "album.html?id=8"
  },
  {
    id: 9,
    name: "The Colour and the Shape",
    artist: "Foo Fighters",
    genre: "Rock",
    image: "assets/images/thecolourandtheshape.jpeg",
    description: "Álbum de 1997 que contiene éxitos como 'Everlong', catapultando a la banda de Dave Grohl.",
    url: "album.html?id=9"
  },
  {
    id: 10,
    name: "Dangerous Woman",
    artist: "Ariana Grande",
    genre: "Pop",
    image: "assets/images/dangerouswoman.jpeg",
    description: "Lanzado en 2016, mezclando pop, R&B y dance, consolidando a Ariana como estrella global.",
    url: "album.html?id=10"
  },
  {
    id: 11,
    name: "KG0516",
    artist: "Karol G",
    genre: "Reggaetón",
    image: "assets/images/kg0516.jpeg",
    description: "Estrenado en 2021, se convirtió en un éxito comercial y crítico del género urbano.",
    url: "album.html?id=11"
  },
  {
    id: 12,
    name: "A Town Called Paradise",
    artist: "Tiësto",
    genre: "Electrónica",
    image: "assets/images/atowncalledparadise.jpeg",
    description: "Álbum de 2014 que muestra el lado más mainstream del icónico DJ neerlandés.",
    url: "album.html?id=12"
  },
  {
    id: 13,
    name: "AM",
    artist: "Arctic Monkeys",
    genre: "Rock",
    image: "assets/images/am.jpeg",
    description: "Lanzado en 2013, es uno de los trabajos más aclamados de la banda británica.",
    url: "album.html?id=13"
  },
  {
    id: 14,
    name: "Harry's House",
    artist: "Harry Styles",
    genre: "Pop",
    image: "assets/images/harryshouse.jpeg",
    description: "Publicado en 2022, este álbum reafirma la versatilidad y estilo personal del ex One Direction.",
    url: "album.html?id=14"
  },
  {
    id: 15,
    name: "Vice Versa",
    artist: "Rauw Alejandro",
    genre: "Reggaetón",
    image: "assets/images/viceversa.jpeg",
    description: "Estrenado en 2021, demuestra la mezcla de ritmos latinos y pop de Rauw Alejandro.",
    url: "album.html?id=15"
  },
  {
    id: 16,
    name: "Joytime",
    artist: "Marshmello",
    genre: "Electrónica",
    image: "assets/images/joytime.jpeg",
    description: "Álbum debut de Marshmello (2016), mezcla de EDM, trap y futuros beats característicos.",
    url: "album.html?id=16"
  }
];

// ----------------------
// Lógica para listar y detallar álbumes
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  
  // 1) Llenar el LISTADO de álbumes (albumes.html)
  const albumsContainer = document.querySelector(".albums-list");
  if (albumsContainer) {
    albumsContainer.innerHTML = "";
    albumes.forEach((album) => {
      const card = document.createElement("a");
      card.href = album.url;
      card.classList.add("card");

      // Imagen del álbum
      const img = document.createElement("img");
      img.src = album.image;
      img.alt = album.name;
      img.classList.add("card-img");

      // Pie de foto con el nombre del álbum
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = album.name;

      card.appendChild(img);
      card.appendChild(caption);
      albumsContainer.appendChild(card);
    });
  }

  // 2) Mostrar el DETALLE de un álbum (album.html)
  const urlParams = new URLSearchParams(window.location.search);
  const albumId = urlParams.get("id");
  if (albumId) {
    const album = albumes.find(a => a.id === parseInt(albumId));
    if (album) {
      const nameEl = document.getElementById("album-name");
      const artistEl = document.getElementById("album-artist");
      const genreEl = document.getElementById("album-genre");
      const descriptionEl = document.getElementById("album-description");
      const imageEl = document.getElementById("album-image");

      if (nameEl) nameEl.textContent = album.name;
      if (artistEl) artistEl.textContent = album.artist;
      if (genreEl) genreEl.textContent = album.genre;
      if (descriptionEl) descriptionEl.textContent = album.description;
      if (imageEl) {
        imageEl.src = album.image;
        imageEl.alt = album.name;
      }
    } else {
      const content = document.getElementById("album-content");
      if (content) {
        content.innerHTML = "<p>Álbum no encontrado.</p>";
      }
    }
  }
});
