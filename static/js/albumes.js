// albumes.js

// ----------------------
// Arreglo de álbumes
// ----------------------

const holder = document.getElementById("data-albumes");
let albumes = [];
let tracklist = [];
let artistas = []
let user = [];
if (holder) {
  albumes = JSON.parse(holder.dataset.albumes);
  tracklist = JSON.parse(holder.dataset.tracklist);
  artistas = JSON.parse(holder.dataset.artistas);
  user = JSON.parse(holder.dataset.user);
}

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
      // Actualizar información básica del álbum
      const nameEl = document.getElementById("album-name");
      const artistEl = document.getElementById("album-artist");
      const genreEl = document.getElementById("album-genre");
      const descriptionEl = document.getElementById("album-description");
      const imageEl = document.getElementById("album-image");
      const ratingEl = document.getElementById("album-rating");
      
      if (nameEl) nameEl.textContent = album.name;
      if (artistEl) artistEl.textContent = album.artist;
      if (genreEl) genreEl.textContent = album.genre;
      if (descriptionEl) descriptionEl.textContent = album.description;
      
      if (ratingEl) {
        ratingEl.innerHTML = "";  // limpiar cualquier contenido previo
        const rating = Number(album.valoracion) || 0;  // de 0 a 5
        for (let i = 1; i <= 5; i++) {
          const star = document.createElement("span");
          star.className = "star";
          star.textContent = i <= rating ? "★" : "☆";
          ratingEl.appendChild(star);
        }
      }
      if (imageEl) {
        imageEl.src = album.image;
        imageEl.alt = album.name;
      }

      // Mostrar las pistas del álbum si existen
      const trackList = document.getElementById("track-list");
      if (trackList) {
        trackList.innerHTML = "";

          const albumName = album.name;
        
          // 'tracklist' es tu JSON de todas las canciones inyectado en albumes.js
          // filtramos las que tienen album === albumIdNum
          const cancionesAlbum = tracklist.filter(c => {
            // si tu JSON guarda 'album' como string, compara también con String(albumIdNum)
            return c.album === albumName;
          });

        if (cancionesAlbum.length > 0) {
          cancionesAlbum.forEach((track, index) => {
            const li = document.createElement("li");
            li.className = "track";
            
            const a = document.createElement("a");
            a.href = `/cancion?id=${track.id}`;
            a.className = "track-link";
            
            const numberSpan = document.createElement("span");
            numberSpan.className = "track-number";
            numberSpan.textContent = index + 1;
            
            const titleSpan = document.createElement("span");
            titleSpan.className = "track-title";
            titleSpan.textContent = track.title;
            
            const durationSpan = document.createElement("span");
            durationSpan.className = "track-duration";
            durationSpan.textContent = track.duration;
            
            a.appendChild(numberSpan);
            a.appendChild(titleSpan);
            a.appendChild(durationSpan);
            li.appendChild(a);
            trackList.appendChild(li);
          });
        } else {
          trackList.innerHTML = "<li>No hay pistas disponibles para este álbum</li>";
        }
        const art = artistas.find(a => a.name === album.artist);
        const container = document.querySelector(".artist-link");
        const usuario = user[0];
        if (usuario.tipo_usuario === "artist" && album.artist === usuario.username) {
            container.innerHTML = `
              <a href="/actualizar_album?id=${album.id}" class="btn">
                ACTUALIZAR ÁLBUM
              </a>`;
        } else {
          container.innerHTML = `
            <a href="/artistas?id=${art.id}" class="btn">
              IR AL ARTISTA
            </a>`;
        }
      }
    } else {
      const content = document.getElementById("album-content");
      if (content) {
        content.innerHTML = "<p>Álbum no encontrado.</p>";
      }
    }
  }
});
