// Objetivo: Cargar la información de los sellos discográficos en la página sellos.html
//           y mostrar el detalle de un sello en particular.

const holder = document.getElementById("data-sellos");
let sellos = [];
let artistas = [];
if (holder) {
  sellos = JSON.parse(holder.dataset.sellos);
  artistas = JSON.parse(holder.dataset.artistas);
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
    const label = sellos.find(s => String(s.id) === String(labelId));
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

      // Cargar artistas dinámicamente
      const artistasList = document.getElementById("artista-list");
      if (artistasList) {
        artistasList.innerHTML = "";

          const idSello = label.id;
          const artistasSello = artistas.filter(a => {
            return (a.selloId === parseInt(idSello));
          });


        if (artistasSello.length > 0) {
          artistasSello.forEach((artista) => {
            const li = document.createElement("li");
            li.className = "artista";
            
            const a = document.createElement("a");
            a.href = `${artista.url}`;
            a.className = "artista-link";
            
            const imgSpan = document.createElement("img");
            imgSpan.src = artista.image;                 
            imgSpan.alt = artista.name;
            imgSpan.className = "artista-img";
            
            const nameSpan = document.createElement("span");
            nameSpan.className = "artista-name";
            nameSpan.textContent = artista.name;
            
            const genreSpan = document.createElement("span");
            genreSpan.className = "artista-genre";
            genreSpan.textContent = artista.genre;
            
            a.appendChild(imgSpan);
            a.appendChild(nameSpan);
            a.appendChild(genreSpan);
            li.appendChild(a);
            artistasList.appendChild(li);
          });
        } else {
          artistasList.innerHTML = "<li>No hay artistas disponibles para este sello</li>";
        }
      }
    } else {
      const content = document.getElementById("label-content");
      if (content) {
        content.innerHTML = "<p>Sello no encontrado.</p>";
      }
    }
  }
});
