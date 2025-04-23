// Objetivo: Cargar la información de los sellos discográficos en la página sellos.html
//           y mostrar el detalle de un sello en particular.

const holder = document.getElementById("data-sellos");
let sellos = [];
if (holder) {
  sellos = JSON.parse(holder.dataset.sellos);
}

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
    const label = sellos.find(s => s.id === labelId);
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
