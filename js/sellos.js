// sellos.js

const sellos = [
  {
    id: 1,
    name: "Universal Music",
    description: "Universal Music es uno de los sellos discográficos más grandes del mundo.",
    image: "assets/images/universal.jpeg",
    url: "sellos.html?id=1"
  },
  {
    id: 2,
    name: "Sony Music",
    description: "Sony Music es una de las compañías discográficas más importantes en la industria de la música.",
    image: "assets/images/sony.jpeg",
    url: "sellos.html?id=2"
  },
  {
    id: 3,
    name: "Warner Music Group",
    description: "Warner Music Group es uno de los tres grandes sellos discográficos a nivel mundial.",
    image: "assets/images/warner.jpeg",
    url: "sellos.html?id=3"
  },
  {
    id: 4,
    name: "EMI Records",
    description: "EMI Records, ahora parte de Universal, fue uno de los sellos más influyentes del siglo XX.",
    image: "assets/images/emi.jpeg",
    url: "sellos.html?id=4"
  },
  {
    id: 5,
    name: "BMG Rights Management",
    description: "BMG es una empresa global que combina la gestión de derechos musicales con la publicación discográfica.",
    image: "assets/images/bmg.jpeg",
    url: "sellos.html?id=5"
  },
  {
    id: 6,
    name: "Capitol Records",
    description: "Capitol Records es un sellos icónico con una larga historia en la música pop y rock.",
    image: "assets/images/capitol.jpeg",
    url: "sellos.html?id=6"
  },
  {
    id: 7,
    name: "Atlantic Records",
    description: "Atlantic Records ha sido pionero en géneros como el R&B, soul y rock desde su fundación.",
    image: "assets/images/atlantic.jpeg",
    url: "sellos.html?id=7"
  },
  {
    id: 8,
    name: "Columbia Records",
    description: "Columbia Records es uno de los sellos más antiguos y prestigiosos de la historia musical.",
    image: "assets/images/columbia.jpeg",
    url: "sellos.html?id=8"
  }
];


document.addEventListener("DOMContentLoaded", () => {
  // ----------------------
  // 1) Llenar el LISTADO de sellos (sellos.html)
  // ----------------------
  const labelsContainer = document.querySelector('.labels-list');
  if (labelsContainer) {
    labelsContainer.innerHTML = "";
    sellos.forEach((label) => {
      const card = document.createElement("a");
      card.href = label.url;
      card.classList.add("card");

      // Imagen del sellos
      const img = document.createElement("img");
      img.src = label.image;
      img.alt = label.name;
      img.classList.add("card-img");

      // Pie de foto con el nombre del sellos
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = label.name;

      card.appendChild(img);
      card.appendChild(caption);
      labelsContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de un sellos (sellos.html)
  // ----------------------
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
    } else {
      const content = document.getElementById("label-content");
      if (content) {
        content.innerHTML = "<p>sellos no encontrado.</p>";
      }
    }
  }
});
