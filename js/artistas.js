// artistas.js

const artistas = [
  { name: "Queen", genre: "Rock", description: "Queen es una banda de rock británica, famosa por su estilo único y la voz de Freddie Mercury." },
  { name: "The Weeknd", genre: "Pop", description: "The Weeknd es un cantante canadiense conocido por su estilo de R&B y pop experimental." },
  { name: "Bad Bunny", genre: "Reggaetón", description: "Bad Bunny es un artistas puertorriqueño que ha revolucionado el reggaetón y la música urbana." },
  { name: "David Guetta", genre: "Electrónica", description: "David Guetta es un DJ y productor francés considerado una de las figuras más influyentes de la música electrónica." },
  { name: "Coldplay", genre: "Rock", description: "Coldplay es una banda británica de rock alternativo conocida por su sonido melódico y emocional." },
  { name: "Dua Lipa", genre: "Pop", description: "Dua Lipa es una cantante británica de pop que ha ganado reconocimiento mundial por su estilo y voz." },
  { name: "J Balvin", genre: "Reggaetón", description: "J Balvin es uno de los artistas más representativos del reggaetón a nivel global." },
  { name: "Calvin Harris", genre: "Electrónica", description: "Calvin Harris es un DJ y productor escocés reconocido por sus colaboraciones en la música electrónica y pop." },
  { name: "Foo Fighters", genre: "Rock", description: "Foo Fighters es una banda de rock estadounidense fundada por Dave Grohl, exbatería de Nirvana." },
  { name: "Ariana Grande", genre: "Pop", description: "Ariana Grande es una cantante y actriz estadounidense conocida por su poderosa voz y estilo pop." },
  { name: "Karol G", genre: "Reggaetón", description: "Karol G es una cantante colombiana destacada en la música urbana y reggaetón." },
  { name: "Tiësto", genre: "Electrónica", description: "Tiësto es un DJ neerlandés considerado una leyenda en la música electrónica y trance." },
  { name: "Arctic Monkeys", genre: "Rock", description: "Arctic Monkeys es una banda de rock alternativo británica con un estilo único y letras ingeniosas." },
  { name: "Harry Styles", genre: "Pop", description: "Harry Styles es un cantante británico que ha desarrollado una exitosa carrera como solista en el pop." },
  { name: "Rauw Alejandro", genre: "Reggaetón", description: "Rauw Alejandro es una estrella emergente del reggaetón, conocido por su versatilidad musical y estilo innovador." },
  { name: "Marshmello", genre: "Electrónica", description: "Marshmello es un DJ y productor estadounidense famoso por su estilo EDM y su icónica máscara." }
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
