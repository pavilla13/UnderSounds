// sellos.js

const sellos = [
  {
    id: 1,
    name: "Universal Music",
    description: "Universal Music es uno de los sellos discográficos más grandes del mundo.",
    image: "assets/images/universal.jpeg",
    url: "sello.html?id=1"
  },
  {
    id: 2,
    name: "Sony Music",
    description: "Sony Music es una de las compañías discográficas más importantes en la industria de la música.",
    image: "assets/images/sony.jpeg",
    url: "sello.html?id=2"
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

      // Imagen del sello
      const img = document.createElement("img");
      img.src = label.image;
      img.alt = label.name;
      img.classList.add("card-img");

      // Pie de foto con el nombre del sello
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = label.name;

      card.appendChild(img);
      card.appendChild(caption);
      labelsContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de un sello (sello.html)
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
        content.innerHTML = "<p>Sello no encontrado.</p>";
      }
    }
  }
});
