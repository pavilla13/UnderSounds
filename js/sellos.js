// Objetivo: Cargar la información de los sellos discográficos en la página sellos.html
//           y mostrar el detalle de un sello en particular.

const sellos = [
  {
    id: 1,
    name: "Universal Music",
    description: "Universal Music es uno de los sellos discográficos más grandes del mundo.",
    image: "assets/images/universal.jpeg",
    url: "sellos.html?id=1",
    albumIds: [1, 2, 3, 4, 5] // IDs de álbumes en albumes.js
  },
  {
    id: 2,
    name: "Sony Music",
    description: "Sony Music es una de las compañías discográficas más importantes en la industria de la música.",
    image: "assets/images/sony.png",
    url: "sellos.html?id=2",
    albumIds: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    name: "Warner Music Group",
    description: "Warner Music Group es uno de los tres grandes sellos discográficos a nivel mundial.",
    image: "assets/images/warner.webp",
    url: "sellos.html?id=3",
    albumIds: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    name: "EMI Records",
    description: "EMI Records, ahora parte de Universal, fue uno de los sellos más influyentes del siglo XX.",
    image: "assets/images/emi.png",
    url: "sellos.html?id=4",
    albumIds: [16, 17, 18, 19, 20]
  },
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
    } else {
      const content = document.getElementById("label-content");
      if (content) {
        content.innerHTML = "<p>Sello no encontrado.</p>";
      }
    }
  }
});
