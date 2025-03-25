

const sellos = [
  {
    id: 1,
    name: "Universal Music",
    description: "Universal Music es uno de los sellos discográficos más grandes del mundo.",
    image: "assets/images/universal.jpeg",
    url: "sellos.html?id=1",
    albumIds: [1, 2, 3, 4, 5], // IDs de álbumes en albumes.js
    artistIds: [1, 2, 3, 4, 5] // IDs de artistas en artistas.js
  },
  {
    id: 2,
    name: "Sony Music",
    description: "Sony Music es una de las compañías discográficas más importantes en la industria de la música.",
    image: "assets/images/sony.jpeg",
    url: "sellos.html?id=2",
    albumIds: [6, 7, 8, 9, 10],
    artistIds: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    name: "Warner Music Group",
    description: "Warner Music Group es uno de los tres grandes sellos discográficos a nivel mundial.",
    image: "assets/images/warner.jpeg",
    url: "sellos.html?id=3",
    albumIds: [11, 12, 13, 14, 15],
    artistIds: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    name: "EMI Records",
    description: "EMI Records, ahora parte de Universal, fue uno de los sellos más influyentes del siglo XX.",
    image: "assets/images/emi.jpeg",
    url: "sellos.html?id=4",
    albumIds: [16, 17, 18, 19, 20],
    artistIds: [16, 17, 18, 19, 20]
  },
  // ... otros sellos con la misma estructura
];

document.addEventListener("DOMContentLoaded", () => {
  // 1) Llenar el LISTADO de sellos (sellos.html)
  const labelsContainer = document.querySelector('.labels-list');
  if (labelsContainer) {
    labelsContainer.innerHTML = "";
    sellos.forEach((label) => {
      const card = document.createElement("a");
      card.href = label.url;
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = label.image;
      img.alt = label.name;
      img.classList.add("card-img");

      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = label.name;

      card.appendChild(img);
      card.appendChild(caption);
      labelsContainer.appendChild(card);
    });
  }

  // 2) Mostrar el DETALLE de un sello (sellos.html)
  const urlParams = new URLSearchParams(window.location.search);
  const labelId = urlParams.get("id");
  if (labelId) {
    const label = sellos.find(s => s.id === parseInt(labelId));
    if (label) {
      const nameEl = document.getElementById("label-name");
      const descriptionEl = document.getElementById("label-description");
      const imageEl = document.getElementById("label-image");

      if (nameEl) nameEl.textContent = label.name;
      if (descriptionEl) descriptionEl.textContent = label.description;
      if (imageEl) {
        imageEl.src = label.image;
        imageEl.alt = label.name;
      }

      // Cargar álbumes y artistas dinámicamente
      loadAlbums(label.albumIds);
      loadArtists(label.artistIds);
    } else {
      const content = document.getElementById("label-content");
      if (content) {
        content.innerHTML = "<p>Sello no encontrado.</p>";
      }
    }
  }
});

// Función para cargar álbumes desde albumes.js
function loadAlbums(albumIds) {
  const albumsContainer = document.getElementById("recent-albums");
  if (!albumsContainer) return;

  albumsContainer.innerHTML = "";
  
  albumIds.forEach(albumId => {
    // Aquí asumimos que albumes.js está cargado y tiene el array 'albumes'
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

// Función para cargar artistas desde artistas.js
function loadArtists(artistIds) {
  const artistsContainer = document.getElementById("label-artists");
  if (!artistsContainer) return;

  artistsContainer.innerHTML = "";
  
  artistIds.forEach(artistId => {
    // Aquí asumimos que artistas.js está cargado y tiene el array 'artistas'
    const artist = artistas.find(a => a.id === artistId);
    if (artist) {
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
    }
  });
}
